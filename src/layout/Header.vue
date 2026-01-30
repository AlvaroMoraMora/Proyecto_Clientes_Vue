<script setup lang="ts">
  import logo from '../assets/LogoCryptoVue.webp';
  import Ticker from '../components/Ticker.vue';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>

<template>
    <Ticker/>

    <header class="border-b-4 border-[#34495E] bg-white">
        <div class="max-w-[90%] w-[1300px] mx-auto flex items-center justify-between px-6 py-6">
            <router-link to="/" class="flex items-center gap-4">
                <img :src="logo" alt="logo" style="width: 55px; height: 51px;"/>
                <span class="display text-5xl tracking-wide">CRYPTOVUE</span>
            </router-link>
            <nav class="hidden md:flex items-center gap-2">
                <router-link to="/" 
                    class="px-4 py-2 border-4 border-[#34495E] hover:bg-[#34495E] text-[#34495E] hover:text-white transition-none font-bold"
                    active-class="bg-[#34495E] !text-white"
                    exact
                >
                    {{ t('header.nav.inicio') }}
                </router-link>
                <router-link to="/Mercado"
                    class="px-4 py-2 border-4 border-[#34495E] hover:bg-[#34495E] text-[#34495E] hover:text-white transition-none font-bold"
                    active-class="bg-[#34495E] !text-white"
                >
                    {{ t('header.nav.mercado') }}
                </router-link>
                <router-link to="/login"
                    class="px-4 py-2 bg-[#42b883] text-white font-bold border-4 border-[#34495E] shadow-brutal ml-2">{{ t('header.nav.entrar') }}</router-link>
            </nav>
        </div>
    </header>
</template>
