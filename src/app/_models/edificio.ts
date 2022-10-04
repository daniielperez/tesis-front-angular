export class Edificio {
  static edificioDesdeJson(obj: object) {
    return new Edificio(obj["id"], obj["nombre"], obj["idSede"]);
  }

  constructor(
    public id: number,
    public nombre: string,
    public idSede: any
  ) {}

  get fullName() {
    return `${this.nombre}`;
  }
}
