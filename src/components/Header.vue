<script setup lang="ts">
  import logo from '../assets/LogoCryptoVue.webp'
</script>

<template>
    <div class="bg-[#42b883] py-2 overflow-hidden">
        <div class="marquee whitespace-nowrap text-center">
            <span class="inline-block px-8 font-bold text-white">BTC $67,245 ↑2.4%</span>
            <span class="inline-block px-8 font-bold text-white">ETH $3,456 ↑1.8%</span>
            <span class="inline-block px-8 font-bold text-white">SOL $178 ↓0.5%</span>
            <span class="inline-block px-8 font-bold text-white">ADA $0.89 ↑4.2%</span>
            <span class="inline-block px-8 font-bold text-white">BTC $67,245 ↑2.4%</span>
            <span class="inline-block px-8 font-bold text-white">ETH $3,456 ↑1.8%</span>
            <span class="inline-block px-8 font-bold text-white">SOL $178 ↓0.5%</span>
            <span class="inline-block px-8 font-bold text-white">ADA $0.89 ↑4.2%</span>
        </div>
    </div>

    <header class="border-b-4 border-[#34495E] bg-white">
        <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <router-link to="/" class="flex items-center gap-4">
                <img :src="logo" alt="logo" style="width: 55px; height: 51px;"/>
                <span class="display text-5xl tracking-wide">CRYPTOVUE</span>
            </router-link>
            <nav class="hidden md:flex items-center gap-2">
                <router-link to="/" class="px-4 py-2 border-4 border-[#34495E] bg-[#34495E] text-white font-bold">INICIO</router-link>
                <router-link to=""
                    class="px-4 py-2 border-4 border-[#34495E] hover:bg-[#34495E] text-[#34495E] hover:text-white transition-none font-bold">MERCADO</router-link>
                <router-link to=""
                    class="px-4 py-2 border-4 border-[#34495E] hover:bg-[#34495E] text-[#34495E] hover:text-white transition-none font-bold ">ABOUT</router-link>
                <router-link to=""
                    class="px-4 py-2 bg-[#42b883] text-white font-bold border-4 border-[#34495E] shadow-brutal ml-2">ENTRAR</router-link>
            </nav>
        </div>
    </header>
</template>
