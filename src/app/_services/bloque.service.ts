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

  @Output() changeSelect: EventEmitter<Bloque> = new EventEmitter();
  public url: String = `${environment.apiUrl}/operaciones/bloques`;
  public getAll(id: number) {
    return this.http
      .get<Bloque[]>(this.url + "/fk/" + id, {
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
      .post<Bloque[]>(this.url + "/", sede, {
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

  selectBloque(bloque: Bloque) {
    this.bloqueSelect = Bloque.bloqueSelectDesdeJson(bloque);
    this.changeSelect.emit(this.bloqueSelect);
  }

  public getBloque(): Bloque {
    return this.bloqueSelect;
  }
}
