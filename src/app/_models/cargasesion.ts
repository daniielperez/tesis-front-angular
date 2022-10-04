export class Cargasesion {
  static CargasesionDesdeJson(obj: object) {
    return new Cargasesion(
      obj["id"],
      obj["idSesion"],
      obj["idCarga"]
    );
  }
  constructor(
    public id: number,
    public idSesion: any,
    public idCarga: any
  ) {}
}
