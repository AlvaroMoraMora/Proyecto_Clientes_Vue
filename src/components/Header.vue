<script setup lang="ts">
  import { ref } from 'vue';
  import inglesIcono from '../assets/ingles-icono.png'
  import espanolIcono from '../assets/espanol-icono.png'
  import logo from '../assets/LogoCriptoVue.svg'

  type Idioma = "ingles" | "espanol";
  type Iconos = Record<Idioma, string>

  const idioma = ref<Idioma>("ingles");

  const iconos: Iconos = {
    ingles: inglesIcono,
    espanol: espanolIcono
  }
</script>

<template>
  <header class="bg-[#E2E8F0] flex items-center justify-between px-5 py-2">
    <a href="#">
      <div class="flex justify-center items-center">
        <img :src="logo" alt="" class="w-[70px] h-[70px]"/>
        <h2 class="text-3xl text-[#34495E] font-bold">CryptoVue</h2>
      </div>
    </a>

    <ul class="text-xl text-[#34495E] font-bold flex gap-4">
      <li>
        <a href="#" class="hover:text-[rgb(82,103,124)]">Resumen</a>
      </li>
      
      <li>
        <a href="#" class="hover:text-[rgb(82,103,124)]">Monedas</a>
      </li>
      
      <li>
        <a href="#" class="hover:text-[rgb(82,103,124)]">Suscribirse</a>
      </li>
    </ul>
    
    <nav>
      <button class="text-lg flex items-center justify-center rounded-2xl cursor-pointer">
        <img :src="iconos[idioma]" :alt="'idioma ' + idioma" class="w-[50px] h-[50px]"/>
      </button>
    </nav>
  </header>
</template>
