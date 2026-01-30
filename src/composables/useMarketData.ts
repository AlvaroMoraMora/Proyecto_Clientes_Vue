import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

type Crypto = {
    id: number;
    name: string;
    code: string;
    price: number;
    change24h: number;
    change7d: number;
    marketCap: string;
    volume24h: string;
    chartData: number[];
    icon: string;
    color: string;
}

const monedas = ref<Crypto[]>([]);
const filtros = ['TODOS', 'ALZA 24H', 'ALZA 7D', '< 1$', '>= 1$', 'PRECIO ↓', 'PRECIO ↑'];
const filtroActivo = ref('TODOS');

export function useMarketData() {

    onMounted(async () => {
        if (monedas.value.length === 0) {
            try {
                const response = await axios.get('/data/tablaDatos.json');
                monedas.value = response.data;
            } catch (error) {
                console.error('Error al cargar datos con axios:', error);
            }
        }
    });

    const monedasFiltradas = computed(() => {
        switch (filtroActivo.value) {
            case 'ALZA 24H':
                return monedas.value.filter(m => m.change24h > 0);
            case 'ALZA 7D':
                return monedas.value.filter(m => m.change7d > 0);
            case '< 1$':
                return monedas.value.filter(m => m.price < 1);
            case '>= 1$':
                return monedas.value.filter(m => m.price >= 1);
            case 'PRECIO ↓':
                return [...monedas.value].sort((a, b) => b.price - a.price);
            case 'PRECIO ↑':
                return [...monedas.value].sort((a, b) => a.price - b.price);
            default:
                return monedas.value;
        }
    });

    const generarTrazoGrafico = (data: number[]) => {
        if (!data || data.length === 0) return '';
        const width = 100;
        const height = 40;
        const min = Math.min(...data);
        const max = Math.max(...data);
        const range = max - min;
        
        const points = data.map((val, i) => {
            const x = (i / (data.length - 1)) * width;
            const y = height - ((val - min) / range) * height;
            return `${x},${y}`;
        });
        
        return `M${points.join(' L')}`;
    };

    return {
        monedas: monedasFiltradas,
        filtros,
        filtroActivo,
        generarTrazoGrafico
    };
}
