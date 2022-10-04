export class Planestudio {
  static PlanestudioDesdeJson(obj: object) {
    return new Planestudio(
      obj["id"],
      obj["nombre"]
    );
  }
  constructor(
    public id: number,
    public nombre: string
  ) {}
}