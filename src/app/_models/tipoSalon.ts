export class TipoSalon {
  static TipoSalonDesdeJson(obj: object) {
    return new TipoSalon(obj["id"], obj["nombre"]);
  }

  constructor(public id: number, public nombre: string) {}

  // get fullName() {
  //   return `${this.direccion} ${this.nombre}`;
  // }
}
