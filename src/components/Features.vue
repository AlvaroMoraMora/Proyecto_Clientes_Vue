<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section class="mb-16 max-w-[90%] w-[1300px] mx-auto">
    <h2 class="display text-5xl mb-8 border-b-4 border-[#34495E] pb-4">
      {{ t('features.titulo') }}
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="border-4 border-[#34495E] p-6 bg-white shadow-brutal">
        <div class="text-4xl mb-4">📊</div>
        <h3 class="display text-2xl mb-2">{{ t('features.graficas.titulo') }}</h3>
        <p class="text-sm opacity-80">
          {{ t('features.graficas.descripcion') }}
        </p>
      </div>
      <div class="border-4 border-[#34495E] p-6 bg-[#42b883] text-white shadow-brutal">
        <div class="text-4xl mb-4">⚡</div>
        <h3 class="display text-2xl mb-2">{{ t('features.tiempo_real.titulo') }}</h3>
        <p class="text-sm opacity-90">{{ t('features.tiempo_real.descripcion') }}</p>
      </div>
      <div class="border-4 border-[#34495E] p-6 bg-[#ffd93d] shadow-brutal">
        <div class="text-4xl mb-4">🔔</div>
        <h3 class="display text-2xl mb-2">{{ t('features.alertas.titulo') }}</h3>
        <p class="text-sm opacity-80">
          {{ t('features.alertas.descripcion') }}
        </p>
      </div>
      <div class="border-4 border-[#34495E] p-6 bg-[#34495E] text-white shadow-green">
        <div class="text-4xl mb-4">🌍</div>
        <h3 class="display text-2xl mb-2">{{ t('features.multi_idioma.titulo') }}</h3>
        <p class="text-sm opacity-90">{{ t('features.multi_idioma.descripcion') }}</p>
      </div>
    </div>
  </section>
</template>
