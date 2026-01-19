import { Bar, Line } from "vue-chartjs";

export const colores = [
    '#F7931A', // Bitcoin (naranja)
    '#627EEA', // Ethereum (azul)
    '#26A17B', // Tether (verde)
    '#2775CA', // USD Coin (azul USDC)
    '#F3BA2F', // Binance Coin (amarillo)
    '#E84142', // Avalanche (rojo)
    '#8247E5', // Polygon (morado)
    '#23292F', // Solana (negro/gris oscuro)
    '#0033AD'  // Cardano (azul oscuro)
];

export const tiposGrafica = [
    { nombre: 'Barras', componente: Bar },
    { nombre: 'Línea', componente: Line },
];