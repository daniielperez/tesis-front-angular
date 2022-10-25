export class Espacio {
  static EspacioDesdeJson(obj: object) {
    return new Espacio(
      obj["id"],
      obj["nombre"],
      obj["semestre"],
      obj["planEstudio"]["nombre"],
      obj["planEstudio"]
    );
  }
  constructor(
    public id: number,
    public nombre: string,
    public semestre: number,
    public nombrePlanEstudio: any,
    public planEstudio: any
  ) {}
}