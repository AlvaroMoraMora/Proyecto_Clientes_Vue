export type ValoresSemanales = {
    fecha: string;
    precio: number;
}

export type CryptoMoneda = {
    id: string;
    nombre: string;
    codigo: string;
    precio_actual: number;
    historial: ValoresSemanales[];
}