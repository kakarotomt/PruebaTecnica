import { IMoney } from "./money.interface";

export interface IBranch {
  codigo?: number;
  descripcion?: string;
  direccion?: string;
  identificacion?:string;
  fechaCreacion?: Date;
  monedaId?: number;
}
