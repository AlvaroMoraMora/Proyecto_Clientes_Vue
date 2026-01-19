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
                borderColor: colores[indiceMoneda.value % colores.length]
            }]
        };
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

    onMounted(() => {
        cargarDatos();
    })


    return { 
        chartData, 
        cargarDatos, 
        anteriorCriptomoneda, 
        siguienteCriptomoneda 
    }
}