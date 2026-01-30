<script setup lang="ts">
import logo from "../assets/LogoCryptoVue.webp";
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const cambiarIdioma = (idioma: string) => {
    locale.value = idioma;
};
</script>

<template>
  <footer class="bg-[#34495E] text-white pt-12 pb-6">
    <div class="max-w-[90%] w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <img :src="logo" alt="logo" class="w-10 h-10 object-contain" />
          <span class="display text-3xl tracking-wide">CRYPTOVUE</span>
        </div>

        <p class="text-gray-300 leading-relaxed text-sm max-w-xs">
          {{ t('footer.descripcion') }}
        </p>
      </div>

      <div>
        <h4 class="display text-lg uppercase mb-6 pb-2 tracking-wider border-b-2 border-[#42b883] inline-block">
          {{ t('footer.navegacion.titulo') }}
        </h4>
        <ul class="space-y-3 text-gray-300">
          <li>
            <router-link to="/" class="hover:text-white border-b-2 hover:border-[#42b883] transition-colors inline-block pb-0.5">{{ t('footer.navegacion.inicio') }}</router-link>
          </li>
          <li>
            <router-link to="/Mercado" class="hover:text-white border-b-2 hover:border-[#42b883] transition-colors inline-block pb-0.5">{{ t('footer.navegacion.mercado') }}</router-link>
          </li>
          <li>
            <router-link to="/About" class="hover:text-white border-b-2 hover:border-[#42b883] transition-colors inline-block pb-0.5">{{ t('footer.navegacion.about') }}</router-link>
          </li>
          <li>
            <router-link to="/Login" class="hover:text-white border-b-2 hover:border-[#42b883] transition-colors inline-block pb-0.5">{{ t('footer.navegacion.login') }}</router-link>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="display text-lg uppercase mb-6 pb-2 tracking-wider border-b-2 border-[#42b883] inline-block">
          {{ t('footer.legal.titulo') }}
        </h4>
        <ul class="space-y-3 font-medium text-gray-300">
          <li>
            <a href="#" class="hover:text-white border-b-2 hover:border-[#42b883] transition-colors inline-block pb-0.5">{{ t('footer.legal.terminos') }}</a>
          </li>
          <li>
            <a href="#" class="hover:text-white border-b-2 hover:border-[#42b883] transition-colors inline-block pb-0.5">{{ t('footer.legal.privacidad') }}</a>
          </li>
          <li>
            <a href="#" class="hover:text-white border-b-2 hover:border-[#42b883] transition-colors inline-block pb-0.5">{{ t('footer.legal.cookies') }}</a>
          </li>
          <li>
            <a href="#" class="hover:text-white border-b-2 hover:border-[#42b883] transition-colors inline-block pb-0.5">{{ t('footer.legal.licencias') }}</a>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="display text-lg uppercase mb-6 pb-2 tracking-wider border-b-2 border-[#42b883] inline-block">
          {{ t('footer.siguenos') }}
        </h4>
        <div class="flex gap-3">
            <a href="#" class="w-10 h-10 bg-white text-[#34495E] flex items-center justify-center font-bold hover:bg-gray-200 transition-colors">X</a>
            <a href="#" class="w-10 h-10 bg-white text-[#34495E] flex items-center justify-center font-bold hover:bg-gray-200 transition-colors">IG</a>
            <a href="#" class="w-10 h-10 bg-white text-[#34495E] flex items-center justify-center font-bold hover:bg-gray-200 transition-colors">YT</a>
            <a href="#" class="w-10 h-10 bg-white text-[#34495E] flex items-center justify-center font-bold hover:bg-gray-200 transition-colors">TG</a>
        </div>
      </div>
    </div>

    <div class="mt-8 px-6 pt-6">
      <div class="border-t-4 border-[#42b883] max-w-[90%] w-[1300px] mx-auto flex flex-row justify-between items-center gap-4 pt-6">
        <p class="font-bold text-sm tracking-wide uppercase">
          &copy; {{ t('footer.copyright') }}
        </p>
        <div class="flex gap-2">
            <button 
                @click="cambiarIdioma('es')" 
                class="px-3 py-1 font-bold text-sm transition-colors border-2 border-transparent"
                :class="locale === 'es' ? 'bg-[#42b883] text-white' : 'bg-gray-600 text-gray-300 hover:bg-gray-500'"
            >ES</button>
            <button 
                @click="cambiarIdioma('en')" 
                class="px-3 py-1 font-bold text-sm transition-colors border-2 border-transparent"
                :class="locale === 'en' ? 'bg-[#42b883] text-white' : 'bg-gray-600 text-gray-300 hover:bg-gray-500'"
            >EN</button>
        </div>
      </div>
    </div>
  </footer>
</template>
