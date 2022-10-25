export class PlanEstudio {
  static PlanEstudioDesdeJson(obj: object) {
    return new PlanEstudio(
      obj["id"],
      obj["nombre"],
      obj["programa"]["nombre"],
      obj["programa"]
    );
  }
  constructor(
    public id: number,
    public nombre: string,
    public nombrePrograma: any,
    public programa: any
  ) {}
}
