import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { Usuario } from "../_models";

@Injectable({ providedIn: "root" })
export class UsuarioService {
  private url: string = `${environment.apiUrl}/operaciones/usuarios/custom`;
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Usuario[]>(`${environment.apiUrl}/users`);
  }

  public getByDocuemnt(document: string) {
    return this.http
      .get<any>(this.url + "/" + document, {
        observe: "response",
      })
      .pipe(
        map((reques) => {
          return reques.body;
        })
      );
  }

  public getMatriculaByIdAndCarga(idUsuario: number, idCarga: string) {
    return this.http
      .get<any>(this.url + "/" + idUsuario + "/" + idCarga,{
        observe: "response",
      })
      .pipe(
        map((reques) => {
          return reques.body;
        })
      );
  }
}
