// export class User {
//     id: number;
//     username: string;
//     password: string;
//     firstName: string;
//     lastName: string;
//     jwtToken?: string;
//     jwtToken?: string;
// }

export class User {
  static usuarioDesdeJson(obj: object) {
    return new User(
      obj["id"],
      obj["nombre"],
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
