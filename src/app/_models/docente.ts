export class Docente {
  static DocenteDesdeJson(obj: object) {
    return new Docente(
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