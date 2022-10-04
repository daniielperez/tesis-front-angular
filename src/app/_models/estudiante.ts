  export class Estudiante {
    static EstudianteDesdeJson(obj: object) {
      return new Estudiante(
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