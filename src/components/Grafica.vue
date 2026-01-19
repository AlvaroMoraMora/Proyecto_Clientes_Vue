<script setup lang="ts">
import { ref, computed } from 'vue';
import { tiposGrafica } from '../constants';
import { useCryptoData } from '../composables/useCryptoData';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement, ArcElement } from 'chart.js';
import { Bar } from 'vue-chartjs';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement, ArcElement);

const { chartData, anteriorCriptomoneda, siguienteCriptomoneda } = useCryptoData();

const chartOptions = ref({
    responsive: true
});

const indiceTipoGrafica = ref<number>(0);

const componenteGrafica = computed(() => tiposGrafica[indiceTipoGrafica.value]?.componente ?? Bar);

const cambiarTipoGrafica = () => {
    indiceTipoGrafica.value = (indiceTipoGrafica.value + 1) % tiposGrafica.length;
}
</script>

<template>
    <section class="bg-gray-200 m-3 p-3 rounded-lg shadow w-[70%] mx-auto">
        <div class="mx-auto">
            
            <div class="flex items-center justify-between">
                <h2 class="text-2xl font-bold text-[#34495E]">Gráfica</h2>
                
                <button @click="cambiarTipoGrafica" class="p-3 m-3 bg-[rgb(53,73,94)] hover:bg-[rgb(73,93,114)] rounded-xl 
                    text-white font-bold cursor-pointer">
                    Cambiar Gráfica
                </button>
            </div>
            
            <component 
                :is="componenteGrafica"
                v-if="chartData.labels.length > 0"
                :key="chartData.labels.length"
                class="border rounded-xl shadow p-3" 
                id="grafica-prueba"
                :data="chartData"
                :options="chartOptions"
            />
        </div>

        <div class="flex justify-center">
            <button @click="anteriorCriptomoneda" class="p-3 m-3 bg-[rgb(56,174,121)] hover:bg-[rgb(76,194,141)] rounded-xl 
                text-white font-bold cursor-pointer">
                Anterior criptomoneda
            </button>
            
            <button @click="siguienteCriptomoneda" class="p-3 m-3 bg-[rgb(56,174,121)] hover:bg-[rgb(76,194,141)] rounded-xl 
                text-white font-bold cursor-pointer">
                Siguiente criptomoneda
            </button>
        </div>
    </section>

</template>