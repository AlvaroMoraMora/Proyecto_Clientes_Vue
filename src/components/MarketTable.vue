<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { useMarketData } from '../composables/useMarketData';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { monedas, filtros, filtroActivo, generarTrazoGrafico } = useMarketData();

const primero = ref(0);
const filas = ref(5);

const registrosTotales = computed(() => monedas.value.length);
const numeroPaginas = computed(() => Math.ceil(registrosTotales.value / filas.value));
const paginaActual = computed(() => Math.floor(primero.value / filas.value));

watch(filtroActivo, () => {
    primero.value = 0;
});

const fijarPagina = (p: number) => {
    primero.value = p * filas.value;
};

const paginaSiguiente = () => {
    if (primero.value + filas.value < registrosTotales.value) {
        primero.value += filas.value;
    }
};

const paginaAnterior = () => {
    if (primero.value - filas.value >= 0) {
        primero.value -= filas.value;
    }
};

const getFilterLabel = (filterKey: string) => {
    const keyMap: Record<string, string> = {
        'TODOS': 'todos',
        'ALZA 24H': 'alza_24h',
        'ALZA 7D': 'alza_7d',
        '< 1$': 'menos_1',
        '>= 1$': 'mas_1',
        'PRECIO ↑': 'precio_asc',
        'PRECIO ↓': 'precio_desc'
    };
    return t(`mercado.filtros.${keyMap[filterKey]}`);
};
</script>

<template>
  <div>
    <section class="flex flex-wrap gap-4 mb-8">
      <button v-for="filtro in filtros" :key="filtro" @click="filtroActivo = filtro"
        class="px-6 py-2 border-4 border-[#34495E] font-bold text-base transition-none hover:bg-[#34495E] hover:text-white pt-2 pb-2 cursor-pointer"
        :class="filtroActivo === filtro ? 'bg-[#34495E] text-white' : 'bg-white text-[#34495E]'">
        {{ getFilterLabel(filtro) }}
      </button>
    </section>

    <section class="bg-white border-4 border-[#34495E] shadow-[8px_8px_0_#34495E] mb-12 hover:shadow-[4px_4px_0_#34495E] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300">
      <DataTable 
        :value="monedas" 
        v-model:first="primero"
        :rows="filas"
        paginator
        :paginatorTemplate="'PrevPageLink PageLinks NextPageLink'" 
        pt:root:class="w-full font-mono text-[#34495E]"
        pt:header:class="hidden"
        pt:thead:class="bg-[#34495E] text-white"
        pt:column:headercell:class="bg-[#34495E] text-white p-4 font-bold border-none text-left text-base tracking-wider"
        pt:tbody:class="divide-y-4 divide-[#34495E]"
        pt:tbody:row:class="bg-white hover:bg-[#f0f0f0] transition-colors"
        pt:column:bodycell:class="p-4 font-bold align-middle border-none text-base"
        pt:paginator:root:class="hidden"
      >
        <Column field="id" :header="t('tabla.columnas.id')" class="font-bold w-12 pl-6"></Column>

        <Column :header="t('tabla.columnas.moneda')">
          <template #body="slotProps">
            <div class="flex items-center gap-3">
              <div
                :class="`w-10 h-10 ${slotProps.data.color} flex items-center justify-center text-white font-bold`">
                <i v-if="slotProps.data.icon.includes('pi')" :class="slotProps.data.icon"></i>
                <span v-else>{{ slotProps.data.icon }}</span> 
              </div>
              <div>
                <p class="font-bold uppercase text-base">{{ slotProps.data.name }}</p>
                <p class="text-sm opacity-60 font-bold text-gray-500">{{ slotProps.data.code }}</p>
              </div>
            </div>
          </template>
        </Column>

        <Column field="price" :header="t('tabla.columnas.precio')" class="text-right">
          <template #body="slotProps">
            <span class="font-bold">
                ${{ slotProps.data.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) }}
            </span>
          </template>
        </Column>

        <Column field="change24h" :header="t('tabla.columnas.cambio_24h')" class="text-right">
          <template #body="slotProps">
            <span class="font-bold" :class="slotProps.data.change24h >= 0 ? 'text-[#42b883]' : 'text-[#ff6b6b]'">
              {{ slotProps.data.change24h > 0 ? '+' : '' }}{{ slotProps.data.change24h }}%
            </span>
          </template>
        </Column>

        <Column field="change7d" :header="t('tabla.columnas.cambio_7d')" class="text-right">
          <template #body="slotProps">
            <span class="font-bold" :class="slotProps.data.change7d >= 0 ? 'text-[#42b883]' : 'text-[#ff6b6b]'">
              {{ slotProps.data.change7d > 0 ? '+' : '' }}{{ slotProps.data.change7d }}%
            </span>
          </template>
        </Column>

        <Column field="marketCap" :header="t('tabla.columnas.market_cap')" class="text-right font-bold"></Column>
        <Column field="volume24h" :header="t('tabla.columnas.volumen_24h')" class="text-right font-bold"></Column>

        <Column :header="t('tabla.columnas.grafica_7d')" class="text-center w-[150px]">
          <template #body="slotProps">
            <div class="mx-auto w-[120px] h-[60px] relative">
               <svg width="120" height="60" class="stroke-2 fill-none"
                :class="slotProps.data.change7d >= 0 ? 'stroke-[#42b883]' : 'stroke-[#ff6b6b]'">
                <path :d="generarTrazoGrafico(slotProps.data.chartData)" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" />
               </svg>
            </div>
          </template>
        </Column>
      </DataTable>
    </section>

    <div class="flex justify-start items-center gap-0 mt-0 mb-12 w-full">
        <button 
            @click="paginaAnterior" 
            :disabled="primero === 0"
            class="w-12 h-12 border-4 border-[#34495E] border-r-0 font-bold text-xl flex items-center justify-center transition-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus:outline-none"
            :class="primero === 0 ? 'bg-gray-100 text-gray-400' : 'bg-white text-[#34495E] hover:bg-[#34495E] hover:text-white'"
            type="button"
        >
            ←
        </button>

        <button 
            v-for="index in numeroPaginas" 
            :key="index"
            @click="fijarPagina(index - 1)"
            class="w-12 h-12 border-4 border-[#34495E] font-bold text-lg flex items-center justify-center cursor-pointer transition-none focus:outline-none"
            :class="[
                (index - 1) === paginaActual ? 'bg-[#34495E] text-white' : 'bg-white text-[#34495E] hover:bg-[#34495E] hover:text-white',
                index < numeroPaginas ? 'border-r-0' : 'border-r-0' 
            ]"
            type="button"
        >
            {{ index }}
        </button>

         <button 
            @click="paginaSiguiente" 
            :disabled="primero + filas >= registrosTotales"
            class="w-12 h-12 border-4 border-[#34495E] font-bold text-xl flex items-center justify-center transition-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus:outline-none"
             :class="(primero + filas >= registrosTotales) ? 'bg-gray-100 text-gray-400' : 'bg-white text-[#34495E] hover:bg-[#34495E] hover:text-white'"
             type="button"
        >
            →
        </button>
    </div>

  </div>
</template>

<style scoped>
:deep(.p-datatable-thead > tr > th) {
   background-color: #34495E !important;
   color: white !important;
   padding: 1.25rem 1rem !important;
   font-weight: 800 !important;
   font-family: 'Space Mono', monospace !important;
   text-transform: uppercase;
   letter-spacing: 0.05em;
   border: none !important;
   border-bottom: 4px solid #34495E !important;
   border-radius: 0 !important;
}

:deep(.p-datatable) {
    border-radius: 0 !important;
}
:deep(.p-datatable-header),
:deep(.p-paginator) {
    border-radius: 0 !important;
}

:deep(.p-datatable-thead > tr > th:nth-child(3)),
:deep(.p-datatable-thead > tr > th:nth-child(4)),
:deep(.p-datatable-thead > tr > th:nth-child(5)),
:deep(.p-datatable-thead > tr > th:nth-child(6)),
:deep(.p-datatable-thead > tr > th:nth-child(7)) {
    text-align: right;
}

:deep(.p-datatable-thead > tr > th:last-child) {
    text-align: center;
}

:deep(.p-datatable-tbody > tr > td) {
    border: none !important;
    font-family: 'Space Mono', monospace !important;
    padding: 1.5rem 1rem !important;
    vertical-align: middle !important;
}

:deep(.p-paginator) {
    display: none !important;
}
</style>
