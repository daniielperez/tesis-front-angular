
export class Anexo {
  static AnexoDesdeJson(obj: object) {
    return new Anexo(
      obj["id"],
      obj["archivo"],
      obj["fecha"],
      obj["hora"],
      obj["idFalta"]
    );
  }
  constructor(
    public id: number,
    public archivo: string,
    public fecha: Date,
    public hora: TimeRanges,
    public idFalta: any
  ) {}
}