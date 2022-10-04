export class Horario {
  static HorarioDesdeJson(obj: object) {
    return new Horario(
      obj["id"],
      obj["dia"],
      obj["hinicio"],
      obj["tclase"],
      obj["urlremota"],
      obj["hfin"],
      obj["idCarga"],
      obj["idSalon"]
    );
  }
  constructor(
    public id: Number,
    public dia: Date,
    public hinicio: TimeRanges,
    public tclase: string,
    public urlremota: string,
    public hfin: TimeRanges,
    public idCarga: any,
    public idSalon: any
  ) {}
}