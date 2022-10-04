  export class Estudiante {
    static EstudianteDesdeJson(obj: object) {
      return new Estudiante(
        obj["codigo"],
        obj["nombre"],
        obj["apellido"],
        obj["celular"],
        obj["correo"]
      );
    }
  
    constructor(
      public codigo: number,
      public nombre: string,
      public apellido: string,
      public celular: string,
      public correo: string
    ) {}
  }