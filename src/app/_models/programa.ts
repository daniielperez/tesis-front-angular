export class Programa {
    static ProgramaDesdeJson(obj: object) {
      return new Programa(
        obj["id"],
        obj["nombre"]
      );
    }
    constructor(
      public id: number,
      public nombre: string
    ) {}
  }