export class Falta {
  static FaltaDesdeJson(obj: object) {
    return new Falta(
      obj["id"],
      obj["descripcion"],
      obj["verificacion"],
      obj["idSesion"],
      obj["idPersona"],
    );
  }
  constructor(
    public id: number,
    public descripcion: string,
    public verificacion: string,
    public idSesion: any,
    public idPersona: any
  ) {}
}