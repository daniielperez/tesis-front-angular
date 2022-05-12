import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { Sede } from "../_models";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class SedeService {
  constructor(private http: HttpClient) {}

  public getAll() {
    return this.http
      .get<Sede[]>(`${environment.apiUrl}/sedes`, {
        observe: "response",
      })
      .pipe(
        map((reques) => {
          return reques;
        })
      );
  }

  insert(sede: any) {
    return this.http
      .post<Sede[]>(`${environment.apiUrl}/sedes`, sede, {
        observe: "response",
        responseType: "json",
      })
      .pipe(
        map((reques) => {
          return reques;
        })
      );
  }
}
