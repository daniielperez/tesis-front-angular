import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { respuestaUpload, Programa, Select } from "../_models";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class ProgramaService {
  public url: String = `${environment.apiUrl}/operaciones/programas`;

  constructor(private http: HttpClient) {}

  insert(Programa: any) {
    return this.http
      .post<respuestaUpload>(this.url + "/", Programa, {
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
      .get<Programa[]>(this.url + "/", {
        observe: "response",
      })
      .pipe(
        map((reques: any) => {
          return reques.body._embedded.programas.map((programa) =>
            Programa.ProgramaDesdeJson(programa)
          );
        })
      );
  }

  public getAllSelect() {
    return this.http
      .get<Select[]>(this.url + "/", {
        observe: "response",
      })
      .pipe(
        map((reques: any) => {
          return reques.body._embedded.programas.map((programa) =>
            Select.selectDesdeJson(programa)
          );
        })
      );
  }
}
