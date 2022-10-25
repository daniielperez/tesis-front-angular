export class Select {
  static selectDesdeJson(obj: object) {
    return new Select(obj["id"], obj["nombre"]);
  }
  constructor(public id: number, public name: string) {}
}
