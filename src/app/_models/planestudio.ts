export class Planestudio {
  static PlanestudioDesdeJson(obj: object) {
    return new Planestudio(
      obj["id"],
      obj["nombre"],
      obj["idPrograma"]
    );
  }
  constructor(
    public id: number,
    public nombre: string,
    public idPrograma: any
    
  ) {}
}