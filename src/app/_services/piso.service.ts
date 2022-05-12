import { EventEmitter, Injectable, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { Piso, Select } from "../_models";

@Injectable({
  providedIn: "root",
})
export class PisoService {
  private bloqueSelect: Piso;

  private url: String = `${environment.apiUrl}/pisos`;
  constructor(private http: HttpClient) {}

  @Output() change: EventEmitter<Piso> = new EventEmitter();

  public getAll(id: number) {
    return this.http
      .get<Piso[]>(this.url + "/fk/" + id, {
        observe: "response",
      })
      .pipe(
        map((reques) => {
          return reques.body.map((bloque) => Piso.pisoDesdeJson(bloque));
        })
      );
  }

  insert(sede: any) {
    return this.http
      .post<Piso[]>(this.url + "/", sede, {
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

  selectPiso(bloque: Piso) {
    this.setPiso(bloque);
    this.change.emit(this.bloqueSelect);
  }

  public getPiso(): Piso {
    return this.bloqueSelect;
  }

  public setPiso(bloque: Piso): void {
    this.bloqueSelect = Piso.pisoDesdeJson(bloque);
  }
}
