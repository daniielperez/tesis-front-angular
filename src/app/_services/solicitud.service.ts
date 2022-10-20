import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { respuestaUpload, SolicitudUpload } from "../_models";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class SolicitudService {
  public url: String = `${environment.apiUrl}/operaciones/`;

  constructor(private http: HttpClient) {}

  insert(SolicitudUpload: any) {
    return this.http
      .post<respuestaUpload>(
        this.url + "excel/upload/personas/excel",
        SolicitudUpload,
        {
          observe: "response",
          responseType: "json",
        }
      )
      .pipe(
        map((reques) => {
          return reques;
        })
      );
  }

  public getByTipo(tipo: string) {
    return this.http
      .get<SolicitudUpload[]>(this.url + "solicitudes/search/buscar-tipo", {
        observe: "response",
        params: {
          tipo: tipo,
        },
      })
      .pipe(
        map((reques: any) => {
          return reques.body._embedded.solicituds.map((solicitud) =>
            SolicitudUpload.solicitudUploadToJson(solicitud)
          );
        })
      );
  }
}
