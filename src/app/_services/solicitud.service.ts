import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { SolicitudUpload } from "../_models";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class SolicitudService {
  public url: String = `${environment.apiUrl}/operaciones/excel/upload/personas/excel`;
  constructor(private http: HttpClient) {}

  insert(sede: any) {
    return this.http
      .post<SolicitudUpload>(this.url + "/", sede, {
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
