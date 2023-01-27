import { Carga } from "./carga";

export class HorarioFullCalendar {
  static HorarioFullCalendarDesdeJson(obj: object) {
    return new HorarioFullCalendar(
      obj["id"],
      obj["cargaAcademica"]["espacio"]["nombre"],
      obj["hinicio"],
      obj["hfin"],
      obj["cargaAcademica"]
    );
  }
  constructor(
    public id: string,
    public title: string,
    public start: string,
    public end: string,
    public carga: any
  ) {}
}
