import { Component, OnInit } from "@angular/core";
import { EventInput } from "@fullcalendar/core";
import { UsuarioService } from "../../../_services";

@Component({
  selector: "ngx-search-person",
  templateUrl: "./search-person.component.html",
  styleUrls: ["./search-person.component.scss"],
})
export class SearchPersonComponent implements OnInit {
  actividades: any;
  constructor(private _usuarioService: UsuarioService) {}
  ready = false;
  matriculas: any;
  usuario: any;
  initialEvents: EventInput[] = [];
  horasTotalesFaltas;
  horasTotalesAsistencia;
  // initialEvents: EventInput[];
  ngOnInit(): void {}
  ngSearch() {
    this._usuarioService.getByDocuemnt("123456").subscribe((request) => {
      this.matriculas = request.matriculas;
      this.actividades = request.actividad;
      this.usuario = request.usuario;
      this.horasTotalesAsistencia = request.horasAssitenciaTotales;
      this.horasTotalesFaltas = request.horasFaltaTotales;
      request.horarios.forEach((horario) => {
        this.initialEvents.push(horario);
      });
      this.ready = true;
    });
  }

  get porcentajeTotalCarga(){
    let totalHoras = this.horasTotalesAsistencia + this.horasTotalesFaltas;
    let porcentaje = this.horasTotalesAsistencia * 100 / totalHoras;
    return porcentaje; 
  }

  public porcentajeTotalMatricula(matricula: any):boolean {
    let porcentaje = matricula.cargaTotal > 0 ?
    matricula.horasFaltaTotal * 100 / matricula.cargaTotal
     : 100;
     console.log(porcentaje)
    return porcentaje < 20;
  }
}
