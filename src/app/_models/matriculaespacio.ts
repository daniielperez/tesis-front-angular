export class Matriculaespacio {
  static MatriculaespacioDesdeJson(obj: object) {
    return new Matriculaespacio(
      obj["id"],
      obj["fecha"],
      obj["semestre"],
      obj["idPersona"],
      obj["idEspacio"],
      obj["idCarga"]
    );
  }
  constructor(
    public id: Number,
    public fecha: Date,
    public semestre: number,
    public idPersona: any,
    public idEspacio: any,
    public idCarga: any
  ) {}
}
