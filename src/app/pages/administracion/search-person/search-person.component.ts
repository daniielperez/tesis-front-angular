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
  cargas: any; 
  ready = false;
  matriculas: any;
  usuario: any;
  initialEvents: EventInput[] = [];
  horasTotalesFaltas;
  horasTotalesAsistencia;
  identificationFind: any;
  // initialEvents: EventInput[];

  constructor(
    private _usuarioService: UsuarioService
  ) {}
  ngOnInit(): void {

  }
  ngSearch() {
    this.ready = false
    this.initialEvents = [];
    this._usuarioService
      .getByDocuemnt(this.identificationFind)
      .subscribe({
        next: (request) => {
          this.matriculas = request.matriculas;
          this.actividades = request.actividad;
          this.cargas = request.cargas;
          this.usuario = request.usuario;
          this.horasTotalesAsistencia = request.horasAssitenciaTotales;
          this.horasTotalesFaltas = request.horasFaltaTotales;
          request.horarios.forEach((horario) => {
            this.initialEvents.push(horario);
          });
          this.ready = true;
        },
        error: (e) => {
          alert("No se encontro el usuario")
          this.ready = false;
        },
      });
      
  }

  get porcentajeTotalCarga(){
    let totalHoras = this.horasTotalesAsistencia + this.horasTotalesFaltas;
    let porcentaje = this.horasTotalesAsistencia * 100 / totalHoras;
    return porcentaje; 
  }

  

  
}
