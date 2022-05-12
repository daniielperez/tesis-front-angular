import { Extension } from "./extension";
export interface Sede {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  caracteristica: string;
  extension: Extension;
}
