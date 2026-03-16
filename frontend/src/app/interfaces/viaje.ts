export interface Viaje {
    id: number;
    lugar_id: number;
    fecha_viaje:string;
    lugar?: {
        id: number;
        nombre: string;
    };
}
