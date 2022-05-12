export class Edificio {
  static edificioDesdeJson(obj: object) {
    return new Edificio(obj["id"], obj["nombre"], obj["direccion"]);
  }

  constructor(
    public id: number,
    public nombre: string,
    public direccion: string
  ) {}

  get fullName() {
    return `${this.direccion} ${this.nombre}`;
  }
}
