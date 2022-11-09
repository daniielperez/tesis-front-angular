export class SolicitudUpload {
  static solicitudUploadToJson(obj: object) {
    return new SolicitudUpload(
      obj["id"],
      obj["username"],
      obj["nomArchivo"],
      obj["numValid"],
      obj["estado"],
      obj["fechaInicio"],
      obj["tiempo"],
      obj["nuevoPeriodo"]
    );
  }

  constructor(
    public id: string,
    public username: string,
    public nomArchivo: any,
    public numValid: any,
    public estado: any,
    public fechaInicio: any,
    public tiempo: any,
    public nuevoPeriodo: boolean
  ) {}
}
