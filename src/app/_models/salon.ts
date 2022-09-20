export class Salon {
  static salonDesdeJson(obj: object) {
    return new Salon(
      obj["id"],
      obj["nombre"],
      obj["cupo"],
      obj["dimension"],
      obj["codDispositivo"],
      obj["idPiso"],
      obj["nomTipoSalon"],
      obj["idTipoSalon"]
    );
  }

  constructor(
    public id: number,
    public nombre: string,
    public cupo: string,
    public dimension: string,
    public codDispositivo: string,
    public idPiso: any,
    public nomTipoSalon: any,
    public idTipoSalon: any
  ) {}
}
