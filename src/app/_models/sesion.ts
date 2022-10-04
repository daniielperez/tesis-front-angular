export class Sesion{
  static SesionDesdeJson(obj: object) {
    return new Sesion(
      obj["id"],
      obj["fechain"],
      obj["horaen"],
      obj["horasa"],
      obj["novedad"],
      obj["expedicion"],
      obj["tipclase"],
      obj["url"],
      obj["idSalon"]
    );
  }
  constructor(
    public id: number,
    public fechain: Date,
    public horaen: TimeRanges,
    public horasa: TimeRanges,
    public novedad: string,
    public expedicion: number,
    public tipclase: string,
    public url: string,
    public idSalon: any
  ) {}
}
