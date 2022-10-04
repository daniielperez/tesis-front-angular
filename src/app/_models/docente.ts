export class Docente {
  static DocenteDesdeJson(obj: object) {
    return new Docente(
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