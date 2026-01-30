<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { tiposGrafica } from "../constants";
import { useCryptoData } from "../composables/useCryptoData";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import { Bar } from "vue-chartjs";
console.log(ChartJS);

const { t } = useI18n();

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
);

const {
  chartData,
  chartOptions,
  monedas,
  indiceMoneda,
  anteriorCriptomoneda,
  siguienteCriptomoneda,
  cambiarCriptomoneda,
} = useCryptoData();

const indiceTipoGrafica = ref<number>(0);

const componenteGrafica = computed(
  () => tiposGrafica[indiceTipoGrafica.value]?.componente ?? Bar,
);

const cambiarTipoGrafica = (i: number) => {
  indiceTipoGrafica.value = i;
};
</script>

<template>
  <section class="bg-white border-4 border-[#34495E] shadow-brutal p-8 mb-16 max-w-[90%] w-[1300px] mx-auto">
    <div
      class="flex justify-between items-center mb-4 border-b-4 border-[#34495E] pb-4"
    >
      <div>
        <p class="text-sm opacity-70">{{ t('grafica.etiquetas.asset') }}</p>
        <h2 class="display text-3xl" id="crypto-name-0">{{monedas[indiceMoneda]?.nombre}} [{{monedas[indiceMoneda]?.codigo}}]</h2>
      </div>

      <div class="text-right">
        <p class="text-sm opacity-70">{{ t('grafica.etiquetas.price') }}</p>
        <p class="display text-3xl text-[#42b883]" id="crypto-price-0">
          ${{monedas[indiceMoneda]?.historial[1]?.precio}}
        </p>
      </div>
    </div>

    <!-- Botones de tipo de gráfica -->
    <div class="flex gap-2 mb-4">
      <button
        @click="cambiarTipoGrafica(0)"
        class="btn-switch px-4 py-2 border-4 border-[#34495E] font-bold transition-all"
        :class="{ 'bg-[#34495E] text-white': indiceTipoGrafica === 0 }"
        id="btn-bar-0"
      >
        {{ t('grafica.botones.tipo_barras') }}
      </button>
      <button
        @click="cambiarTipoGrafica(1)"
        class="btn-switch px-4 py-2 border-4 border-[#34495E] font-bold transition-all"
        :class="{ 'bg-[#34495E] text-white': indiceTipoGrafica === 1 }"
        id="btn-line-0"
      >
        {{ t('grafica.botones.tipo_linea') }}
      </button>
    </div>

    <!-- Componente dinámico para la gráfica -->
    <component
      :is="componenteGrafica"
      v-if="chartData.labels.length > 0"
      :key="chartData.labels.length"
      class="p-3"
      id="grafica-prueba"
      :data="chartData"
      :options="chartOptions"
    />

    <!-- Botones de navegación de criptomoneda -->
    <div class="flex justify-center items-center gap-4 mt-4">
      <button
        @click="anteriorCriptomoneda()"
        class="w-12 h-12 bg-[#34495E] text-white font-bold text-xl shadow-green transition-all hover:bg-[#42b883]"
      >
        ←
      </button>
      
      <div v-for="(moneda, index) in monedas" :key="moneda.id" 
        class="w-[20px] h-[20px] border-2 border-[#34495E] hover:bg-[#34495E] shadow-green-buttons cursor-pointer"
        :class="{ 'bg-[#34495E]': index === indiceMoneda }"
        @click="cambiarCriptomoneda(index)"
        id="dots-0">
      </div>
      
      <button
        @click="siguienteCriptomoneda()"
        class="w-12 h-12 bg-[#34495E] text-white font-bold text-xl shadow-green transition-all hover:bg-[#42b883]"
      >
        →
      </button>
    </div>
  </section>
</template>
