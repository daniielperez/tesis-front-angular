import { EventEmitter, Injectable, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { Bloque, Select } from "../_models";

@Injectable({
  providedIn: "root",
})
export class BloqueService {
  private bloqueSelect: Bloque;
  constructor(private http: HttpClient) {}

  @Output() change: EventEmitter<Bloque> = new EventEmitter();

  public getAll(id: number) {
    return this.http
      .get<Bloque[]>(`${environment.apiUrl}/bloques/fk/` + id, {
        observe: "response",
      })
      .pipe(
        map((reques) => {
          return reques.body.map((bloque) => Bloque.bloqueDesdeJson(bloque));
        })
      );
  }

  insert(sede: any) {
    return this.http
      .post<Bloque[]>(`${environment.apiUrl}/bloques/`, sede, {
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
      .get<Select[]>(`${environment.apiUrl}/bloques/select/fk/` + id, {
        observe: "response",
      })
      .pipe(
        map((reques) => {
          return reques.body;
        })
      );
  }

  selectBloque(bloque: Bloque) {
    this.setBloque(bloque);
    this.change.emit(this.bloqueSelect);
  }

  public getBloque(): Bloque {
    return this.bloqueSelect;
  }

  public setBloque(bloque: Bloque): void {
    this.bloqueSelect = Bloque.bloqueSelectDesdeJson(bloque);
  }
}
