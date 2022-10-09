export class Bloque {
  static bloqueDesdeJson(obj: object) {
    return new Bloque(obj["id"], obj["nombre"], obj["idEdificio"]);
  }
  static bloqueSelectDesdeJson(obj: object) {
    return new Bloque(obj["id"], obj["nombre"], obj["idEdificio"]);
  }
  constructor(
    public id: number,
    public nombre: string,
    public idEdificio: any
  ) {}
}
