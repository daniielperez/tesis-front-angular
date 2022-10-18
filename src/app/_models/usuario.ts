// export class Usuario {
//     id: number;
//     username: string;
//     password: string;
//     firstName: string;
//     lastName: string;
//     jwtToken?: string;
//     jwtToken?: string;
// }

export class Usuario {
  static usuarioDesdeJson(obj: object) {
    return new Usuario(
      obj["id"],
      obj["username"],
      obj["password"],
      obj["nombre"],
      obj["apellido"],
      obj["access_token"],
      obj["refresh_token"]
    );
  }

  constructor(
    public id: number,
    public username: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public jwtToken?: string,
    public refresh_token?: string
  ) {}
}
