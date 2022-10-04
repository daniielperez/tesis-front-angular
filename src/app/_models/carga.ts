
export class Carga{
  static CargaDesdeJson(obj: object) {
    return new Carga(
      obj["id"],
      obj["periodo"],
      obj["grupo"],
      obj["jornada"],
      obj["intensidad"],
      obj["docente"],
      obj["espacio"]
    );
  }

  constructor(
    public id: number,
    public periodo: string,
    public grupo: string,
    public jornada: string,
    public intensidad: string,
    public docente: string,
    public espacio: number
  ) {}
}