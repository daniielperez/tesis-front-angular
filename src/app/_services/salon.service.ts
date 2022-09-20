import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { Salon, Select } from "../_models";

@Injectable({
  providedIn: "root",
})
export class SalonService {
  private url: String = `${environment.apiUrl}/salon`;
  constructor(private http: HttpClient) {}

  public getAll(id: number) {
    return this.http
      .get<Salon[]>(this.url + "/fk/" + id, {
        observe: "response",
      })
      .pipe(
        map((reques) => {
          return reques.body.map((salon) => Salon.salonDesdeJson(salon));
        })
      );
  }

  insert(sede: any) {
    return this.http
      .post<Salon[]>(this.url + "/", sede, {
        observe: "response",
        responseType: "json",
      })
      .pipe(
        map((reques) => {
          return reques;
        })
      );
  }

  public getSelect(id: number) {
    return this.http
      .get<Select[]>(this.url + "/select/fk/" + id, {
        observe: "response",
      })
      .pipe(
        map((reques) => {
          return reques.body;
        })
      );
  }
}
