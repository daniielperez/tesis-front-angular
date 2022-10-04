export class Asistencia {
  static AsistenciaDesdeJson(obj: object) {
    return new Asistencia(
      obj["id"],
      obj["entrada"],
      obj["salida"],
      obj["estudiante"],
      obj["sesion"]
    );
  }

  constructor(
    public id: number,
    public entrada: TimeRanges,
    public salida: TimeRanges,
    public estudiante: any,
    public sesion: any
  ) {}
}
