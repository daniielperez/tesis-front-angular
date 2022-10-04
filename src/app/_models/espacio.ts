export class Espacio {
  static EspacioDesdeJson(obj: object) {
    return new Espacio(
      obj["id"],
      obj["nombre"],
      obj["semestre"],
      obj["idPlan"]
    );
  }
  constructor(
    public id: number,
    public nombre: string,
    public semestre: number,
    public idPlan: string
  ) {}
}