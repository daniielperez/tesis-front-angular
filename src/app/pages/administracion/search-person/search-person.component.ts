import { Component, OnInit } from "@angular/core";
import { EventInput } from "@fullcalendar/core";
import { UsuarioService } from "../../../_services";

@Component({
  selector: "ngx-search-person",
  templateUrl: "./search-person.component.html",
  styleUrls: ["./search-person.component.scss"],
})
export class SearchPersonComponent implements OnInit {
  constructor(private _usuarioService: UsuarioService) {}
  ready = false;
  matriculas: any;
  usuario: any;
  initialEvents: EventInput[] = [];
  // initialEvents: EventInput[];
  ngOnInit(): void {}
  ngSearch() {
    this._usuarioService.getByDocuemnt("123456").subscribe((request) => {
      this.matriculas = request.matriculas;
      this.usuario = request.usuario;
      request.horarios.forEach((horario) => {
        this.initialEvents.push(horario);
      });
      this.ready = true;
    });
  }
}
