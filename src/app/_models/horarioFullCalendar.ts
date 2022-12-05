export class HorarioFullCalendar {
  static HorarioFullCalendarDesdeJson(obj: object) {
    return new HorarioFullCalendar(
      obj["id"],
      obj["cargaAcademica"]["espacio"]["nombre"],
      obj["hinicio"],
      obj["hfin"]
    );
  }
  constructor(
    public id: string,
    public title: string,
    public start: string,
    public end: string
  ) {}
}
