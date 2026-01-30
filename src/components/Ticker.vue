<script setup lang="ts">
import { useCryptoData } from '../composables/useCryptoData';
import type { CryptoMoneda } from '../types/index';

const {
  monedas
} = useCryptoData();


const calcularPorcentaje = (moneda: CryptoMoneda) => {
    if (!moneda.historial || moneda.historial.length === 0) return '0.00';
    
    const precioAnterior = moneda.historial[moneda.historial.length - 1]?.precio;
    const precioActual = moneda.precio_actual;

    if(precioAnterior == undefined || precioActual == undefined){
        return 0
    }

    const porcentaje = ((precioActual - precioAnterior) / precioAnterior) * 100;
    const signo = porcentaje > 0 ? '↑' : '↓';
    
    return `${signo}${Math.abs(porcentaje).toFixed(1)}`;
}
</script>

<template>
    <div class="bg-[#42b883] py-2 overflow-hidden">
        <div class="marquee whitespace-nowrap text-center">
            <span v-for="moneda in monedas" :key="moneda.id" class="inline-block px-8 font-bold text-white">
                {{ moneda.codigo }} 
                {{ moneda.precio_actual.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }} 
                {{ calcularPorcentaje(moneda) }}%
            </span>
        </div>
    </div>
</template>