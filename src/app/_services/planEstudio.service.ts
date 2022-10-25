import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { respuestaUpload, PlanEstudio, Select } from "../_models";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class PlanEstudioService {
  public url: String = `${environment.apiUrl}/operaciones/plan-estudios`;

  constructor(private http: HttpClient) {}

  insert(PlanEstudio: any) {
    return this.http
      .post<respuestaUpload>(this.url + "/", PlanEstudio, {
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
      .get<PlanEstudio[]>(this.url + "/", {
        observe: "response",
      })
      .pipe(
        map((reques: any) => {
          return reques.body.map((programa) =>
            PlanEstudio.PlanEstudioDesdeJson(programa)
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
          return reques.body.map((planEstudio) =>
            Select.selectDesdeJson(planEstudio)
          );
        })
      );
  }
}
