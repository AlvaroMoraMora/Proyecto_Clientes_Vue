<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section
    class="bg-[#ffd93d] border-4 p-10 my-[64px] max-w-[90%] w-[1300px] mx-auto rotate-2"
  >
    <div class="flex flex-col gap-1">
      <h2 class="display text-8xl uppercase leading-none">{{ t('hero.titulo_1') }}</h2>
      <h2 class="display text-8xl uppercase text-[#42b883] leading-none">
        {{ t('hero.titulo_2') }}
      </h2>
      <p class="text-xl">
        {{ t('hero.subtitulo_1') }}
        <span class="font-bold">{{ t('hero.subtitulo_2') }}</span>
      </p>
    </div>
    <div class="mt-4 flex gap-5">
      <router-link to="/Mercado"
        class="px-8 py-4 uppercase bg-[#42b883] text-white font-bold text-xl border-4 
        border-[#34495E] shadow-brutal transition-all inline-block"
      >
        {{ t('hero.boton_mercado') }}
      </router-link>

      <router-link to="/Registrar" 
        class="px-8 py-4 uppercase bg-white font-bold text-xl border-4 border-[#34495E] 
        shadow-brutal transition-all inline-block"
      >
        {{ t('hero.boton_cuenta') }}
      </router-link >
    </div>
    <div class="absolute -top-6 -right-6 px-6 py-3 bg-[#ff6b6b] text-white font-bold border-4 border-[#34495E] rotate-12 shadow-brutal">{{ t('hero.nuevo') }}</div>
  </section>

  <section class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-[90%] w-[1300px] mx-auto">
    <div class="flex flex-col gap-2 justify-center bg-[#34495E] text-white p-6 shadow-green h-[150px] w-full">
        <p class="text-sm opacity-70 uppercase">{{ t('hero.market_cap') }}</p>
        <p class="display text-5xl">$2.8T</p>
    </div>

    <div class="flex flex-col gap-2 justify-center bg-[#42b883] text-white p-6 shadow-brutal h-[150px] w-full">
        <p class="text-sm opacity-70 uppercase">{{ t('hero.cambio_24h') }}</p>
        <p class="display text-5xl">+5.2%</p>
    </div>

    <div class="flex flex-col gap-2 justify-center bg-white text-[#34495E] p-6 shadow-brutal h-[150px] w-full">
        <p class="text-sm opacity-70 uppercase">{{ t('hero.monedas') }}</p>
        <p class="display text-5xl">12,847</p>
    </div>

    <div class="flex flex-col gap-2 justify-center bg-[#ffd93d] text-[#34495E] p-6 shadow-brutal h-[150px] w-full">
        <p class="text-sm opacity-70 uppercase">{{ t('hero.volumen') }}</p>
        <p class="display text-5xl">$98B</p>
    </div>
  </section>
</template>
