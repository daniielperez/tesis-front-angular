export class Rol {
    static rolDesdeJson(obj: object) {
      return new Rol(
        obj["id"],
        obj["nombre"]
      );
    }
    constructor(
      public id: number,
      public nombre: string
    ) {}
  }
  