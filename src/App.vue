<script setup lang="ts">
import Header from './layout/Header.vue';
import Footer from "./layout/Footer.vue";
</script>

<template>
  <main>
    <Header />
    <RouterView />  
    <Footer />  
  </main>
</template>