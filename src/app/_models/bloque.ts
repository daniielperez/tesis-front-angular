export interface Bloque {
  id: number;
  nombre: string;
  idEdificio: any;
}

export class Bloque {
  static bloqueDesdeJson(obj: object) {
    return new Bloque(obj["id"], obj["nombre"], obj["idEdificio"]);
  }
  static bloqueSelectDesdeJson(obj: object) {
    return new Bloque(obj["id"], obj["name"], obj["idEdificio"]);
  }

  constructor(
    public id: number,
    public nombre: string,
    public idEdificio: any
  ) {}
}
