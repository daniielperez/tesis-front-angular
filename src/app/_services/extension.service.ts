import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { Select } from "../_models";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ExtensionService {
  constructor(private http: HttpClient) {}

  public getSelect() {
    return this.http
      .get<Select[]>(`${environment.apiUrl}/extensions/select`, {
        observe: "response",
      })
      .pipe(
        map((reques) => {
          return reques.body;
        })
      );
  }
}
