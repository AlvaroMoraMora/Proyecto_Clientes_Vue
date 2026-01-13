<script setup lang="ts">
import { ref } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const chartData = ref({
    labels: [] as string[],
    datasets: [{
        label: 'Precio',
        data: [] as number[],
        backgroundColor: '#42b883'
    }]
})

const chartOptions = ref({
  responsive: true
});

</script>

<template>
    <section class="bg-gray-200 m-3 p-3 rounded-lg shadow">
        <h2 class="text-2xl font-bold text-[#34495E]">Gráfica</h2>
        <Bar 
            id="grafica-prueba"
            :options="chartOptions"
            :data="chartData"
        />
    </section>
</template>