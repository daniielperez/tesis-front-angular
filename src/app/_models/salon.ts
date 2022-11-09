﻿export class Salon {
  static salonDesdeJson(obj: object) {
    return new Salon(
      obj["id"],
      obj["nombre"],
      obj["cupo"],
      obj["dimension"],
      obj["nomTipoSalon"],
      obj["dispositivo"],
      obj["idPiso"],
      obj["idTiposalon"]
    );
  }
  constructor(
    public id: number,
    public nombre: string,
    public cupo: string,
    public dimension: string,
    public nomTipoSalon: string,
    public dispositivo: string,
    public idPiso: any,
    public idTiposalon: any
  ) {}
}
