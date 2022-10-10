export class Sesion{
  static SesionDesdeJson(obj: object) {
    return new Sesion(
      obj["id"],
      obj["fechain"],
      obj["hentrada"],
      obj["hsalida"],
      obj["novedad"],
      obj["expira"],
      obj["tipclase"],
      obj["url"],
      obj["idSalon"]
    );
  }
  constructor(
    public id: number,
    public fechain: Date,
    public hentrada: TimeRanges,
    public hsalida: TimeRanges,
    public novedad: string,
    public expira: number,
    public tipclase: string,
    public url: string,
    public idSalon: any
  ) {}
}
