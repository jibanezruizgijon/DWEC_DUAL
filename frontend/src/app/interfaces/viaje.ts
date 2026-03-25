import { Lugar } from './lugar';
export interface Viaje {
    id: number;
    lugar_id: number;
    fecha_viaje:string;
    lugar: Lugar;
}


