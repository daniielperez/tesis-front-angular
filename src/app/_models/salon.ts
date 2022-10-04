export class Salon {
  static salonDesdeJson(obj: object) {
    return new Salon(
      obj["id"],
      obj["nombre"],
      obj["cupo"],
      obj["dimension"],
      obj["capacidadmaxima"],
      obj["codDispositivo"],
      obj["idPiso"],
      obj["idTipoSalon"]
    );
  }

  constructor(
    public id: number,
    public nombre: string,
    public cupo: string,
    public dimension: string,
    public capacidadmaxima: string,
    public codDispositivo: string,
    public idPiso: any,
    public idTipoSalon: any
  ) {}
}
