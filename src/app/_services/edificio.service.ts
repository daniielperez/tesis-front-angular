import { EventEmitter, Injectable, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { Edificio } from "../_models";

@Injectable({
  providedIn: "root",
})
export class EdificioService {
  private edificioSelect: Edificio;
  constructor(private http: HttpClient) {}

  @Output() change: EventEmitter<Edificio> = new EventEmitter();

  public getAll() {
    return this.http
      .get<Edificio[]>(`${environment.apiUrl}/edificios`, {
        observe: "response",
      })
      .pipe(
        map((reques) => {
          return reques.body.map((edificio) =>
            Edificio.edificioDesdeJson(edificio)
          );
        })
      );
  }

  insert(sede: any) {
    return this.http
      .post<Edificio[]>(`${environment.apiUrl}/edificios`, sede, {
        observe: "response",
        responseType: "json",
      })
      .pipe(
        map((reques) => {
          return reques;
        })
      );
  }

  selectEdificio(edificio: Edificio) {
    this.setEdificio(edificio);
    this.change.emit(this.edificioSelect);
  }

  public getEdificio(): Edificio {
    return this.edificioSelect;
  }

  public setEdificio(edificio: Edificio): void {
    this.edificioSelect = Edificio.edificioDesdeJson(edificio);
  }
}
