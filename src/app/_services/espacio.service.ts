import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { respuestaUpload, Espacio } from "../_models";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class EspacioService {
  public url: String = `${environment.apiUrl}/operaciones/espacios-academicos`;

  constructor(private http: HttpClient) {}

  insert(Espacio: any) {
    return this.http
      .post<respuestaUpload>(this.url + "/", Espacio, {
        observe: "response",
        responseType: "json",
      })
      .pipe(
        map((reques) => {
          return reques;
        })
      );
  }

  public getAll() {
    return this.http
      .get<Espacio[]>(this.url + "/", {
        observe: "response",
      })
      .pipe(
        map((reques: any) => {
          return reques.body.map((programa) =>
            Espacio.EspacioDesdeJson(programa)
          );
        })
      );
  }
}
