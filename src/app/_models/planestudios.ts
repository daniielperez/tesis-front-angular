
export class Planestudios {
  static PlanestudiosesdeJson(obj: object) {
    return new Planestudios(
      obj["id"],
      obj["nombre"]
    );
  }

  constructor(
    public id: number,
    public nombre: string
  ) {}
}