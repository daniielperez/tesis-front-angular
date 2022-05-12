export interface Piso {
  id: number;
  nombre: string;
  bloque: any;
}

export interface Piso {
  id: number;
  nombre: string;
  edificio: any;
}

export class Piso {
  static pisoDesdeJson(obj: object) {
    return new Piso(obj["id"], obj["nombre"], obj["idBloque"]);
  }

  constructor(public id: number, public nombre: string, public idBloque: any) {}
}
