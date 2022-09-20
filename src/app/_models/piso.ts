export class Piso {
  static pisoDesdeJson(obj: object) {
    return new Piso(obj["id"], obj["nombre"], obj["idBloque"]);
  }

  constructor(public id: number, public nombre: string, public idBloque: any) {}
}
