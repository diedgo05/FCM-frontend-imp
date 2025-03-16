export interface EventosEntity {
    id: number;
    tipo_sensor: string;
    valor: Float32Array;
    timestamp: Date;
    creado_en: Date;
}