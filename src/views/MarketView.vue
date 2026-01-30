<script setup lang="ts">
import MarketTable from '../components/MarketTable.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-12">
    <section class="mb-12">
      <div class="flex flex-wrap justify-between items-end gap-6 border-b-4 border-[#34495E] pb-6">
        <div>
            <p class="text-sm opacity-70 mb-2 font-mono font-bold text-[#34495E]">{{ t('mercado.explorar') }}</p>
            <h1 class="display text-6xl text-[#34495E] leading-none">{{ t('mercado.titulo') }}</h1>
        </div>
        <div class="flex gap-4">
          <input type="search" :placeholder="t('mercado.buscador.placeholder')"
            class="px-4 py-2 bg-white border-4 border-[#34495E] font-bold focus:outline-none w-64 font-mono text-[#34495E]" />
          <button
            class="px-4 py-2 bg-[#34495E] text-white font-bold border-4 border-[#34495E] flex items-center justify-center hover:bg-[#2c3e50] transition-colors">
            {{ t('mercado.buscador.boton') }}
          </button>
        </div>
      </div>
    </section>

    <MarketTable />
  </div>
</template>
