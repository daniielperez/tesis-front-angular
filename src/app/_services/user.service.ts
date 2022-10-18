import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { Usuario } from "../_models";

@Injectable({ providedIn: "root" })
export class UsuarioService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Usuario[]>(`${environment.apiUrl}/users`);
  }
}
