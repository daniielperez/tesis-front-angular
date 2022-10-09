  export class Persona {
    static EstudianteDesdeJson(obj: object) {
      return new Persona(
        obj["id"],
        obj["cedula"],
        obj["nombre"],
        obj["apellido"],
        obj["celular"],
        obj["correo"]
      );
    }
    constructor(
      public id: number,
      public cedula: string,
      public nombre: string,
      public apellido: string,
      public celular: string,
      public correo: string
    ) {}
  } 