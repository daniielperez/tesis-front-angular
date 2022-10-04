import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { catchError, map } from "rxjs/operators";
import { TipoSalon, Select } from "../_models";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TipoSalonService {
  private url: string = `${environment.apiUrl}/operaciones/tipoSalon`;
  constructor(private http: HttpClient) {}

  public getAll() {
    return this.http
      .get<TipoSalon[]>(this.url + "/", {
        observe: "response",
      })
      .pipe(
        map((reques) => {
          console.log(reques.status);
          return reques.body.map((tiposalon) =>
            TipoSalon.TipoSalonDesdeJson(tiposalon)
          );
        })
      );
  }

  insert(sede: any) {
    return this.http
      .post<TipoSalon[]>(this.url + "/", sede, {
        observe: "response",
        responseType: "json",
      })
      .pipe(
        map((reques) => {
          console.log(reques);
          return reques;
        })
      );
  }

  public getSelect() {
    return this.http
      .get<Select[]>(this.url + "/select", {
        observe: "response",
      })
      .pipe(
        map((reques) => {
          return reques.body;
        })
      );
  }
}
