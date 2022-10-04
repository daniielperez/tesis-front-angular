export class Asistencia {
  static AsistenciaDesdeJson(obj: object) {
    return new Asistencia(
      obj["id"],
      obj["entrada"],
      obj["salida"],
      obj["idEstudiante"],
      obj["idSesion"]
    );
  }
  constructor(
    public id: number,
    public entrada: TimeRanges,
    public salida: TimeRanges,
    public idEstudiante: any,
    public idSesion: any
  ) {}
}
