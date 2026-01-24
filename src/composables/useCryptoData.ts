import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import { colores } from '../constants';
import type { CryptoMoneda } from '../types';

export function useCryptoData() {
    const indiceMoneda = ref<number>(0);
    const monedas = ref<CryptoMoneda[]>([]);

    const chartData = computed(() => {
        if (monedas.value.length === 0) {
            return { labels: [], datasets: [] };
        }
    
        const monedaActual = monedas.value[indiceMoneda.value];
    
        if (!monedaActual) {
            return { labels: [], datasets: [] };
        }
    
        return {
            labels: monedaActual.historial.map(item => item.fecha),
            datasets: [{
                label: monedaActual.nombre,
                data: monedaActual.historial.map(item => item.precio),
                backgroundColor: colores[indiceMoneda.value % colores.length],
                borderColor: '#34495E',
                borderWidth: 3
            }]
        };
    });

    const chartOptions = ref({
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {display: false},
            tooltip: {
                backgroundColor: "#35495e",
                titleColor: "#fff",
                bodyColor: "#fff",
                padding: 10,
                cornerRadius: 8,
                displayColors: false
            }
        },

        scales: {
            x: { 
                grid: { display: false }, 
                ticks: { 
                    color: '#34495E',
                    font: { family: 'Space Mono', weight: 'bold' as const, size: 10 }
                }
            },
            y: { 
                grid: { color: '#34495E', lineWidth: 1 }, 
                ticks: { 
                    color: '#34495E',
                    font: { family: 'Space Mono', size: 10 },
                }
            }
        }
    });

    const cargarDatos = async () => {
    try {
        const response = await axios.get<CryptoMoneda[]>('/data/monedas.json');
        monedas.value = response.data;
    } catch(error) {
            console.error('Error al cargar los datos: ', error);
        }
    }

    const anteriorCriptomoneda = () => {
        if (indiceMoneda.value > 0) {
            indiceMoneda.value--;
        } else {
            indiceMoneda.value = monedas.value.length - 1;
        }
    }

    const siguienteCriptomoneda = () => {
        if (indiceMoneda.value < monedas.value.length - 1) {
            indiceMoneda.value++;
        } else {
            indiceMoneda.value = 0;
        }
    }

    const cambiarCriptomoneda = (i: number) => {
        indiceMoneda.value = i;
    }

    onMounted(() => {
        cargarDatos();
    })


    return { 
        chartData,
        chartOptions, 
        monedas,
        indiceMoneda,
        cargarDatos, 
        anteriorCriptomoneda, 
        siguienteCriptomoneda,
        cambiarCriptomoneda 
    }
}