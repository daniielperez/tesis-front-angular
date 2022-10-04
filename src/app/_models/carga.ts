export class Carga{
  static CargaDesdeJson(obj: object) {
    return new Carga(
      obj["id"],
      obj["periodo"],
      obj["grupo"],
      obj["jornada"],
      obj["intensidad"],
      obj["idDocente"],
      obj["idEspacio"]
    );
  }
  constructor(
    public id: number,
    public periodo: string,
    public grupo: string,
    public jornada: string,
    public intensidad: string,
    public idDocente: any,
    public idEspacio: any
  ) {}
}