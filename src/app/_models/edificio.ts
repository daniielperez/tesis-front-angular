export class Edificio {
  static edificioDesdeJson(obj: object) {
    return new Edificio(obj["id"], obj["nombre"]);
  }

  constructor(
    public id: number,
    public nombre: string,
    
  ) {}

  get fullName() {
    return `${this.nombre}`;
  }
}
