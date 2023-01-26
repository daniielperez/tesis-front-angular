import { Component, OnInit } from "@angular/core";
import { EventInput } from "@fullcalendar/core";
import { UsuarioService } from "../../../_services";
import { NbDialogService } from "@nebular/theme";
import { ViewEspacioAcademicoModalComponent } from "./view-espacioAcademico-modal/view-espacioAcademico-modal.component";

@Component({
  selector: "ngx-search-person",
  templateUrl: "./search-person.component.html",
  styleUrls: ["./search-person.component.scss"],
})
export class SearchPersonComponent implements OnInit {
  actividades: any; 
  ready = false;
  matriculas: any;
  usuario: any;
  initialEvents: EventInput[] = [];
  horasTotalesFaltas;
  horasTotalesAsistencia;
  identificationFind: any;
  // initialEvents: EventInput[];

  constructor(
    private _usuarioService: UsuarioService,
    private dialogService: NbDialogService
  ) {}
  ngOnInit(): void {}
  ngSearch() {
    this._usuarioService
      .getByDocuemnt(this.identificationFind)
      .subscribe({
        next: (request) => {
          this.matriculas = request.matriculas;
          this.actividades = request.actividad;
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

  public porcentajeTotalMatricula(matricula: any):boolean {
    let porcentaje = matricula.cargaTotal > 0 ?
    matricula.horasFaltaTotal * 100 / matricula.cargaTotal
     : 100;
    return porcentaje < 20;
  }

  onOpenModal(matricula) {
    this.dialogService
      .open(ViewEspacioAcademicoModalComponent, {
        closeOnBackdropClick: false,
        context: {
          matricula: matricula,
        },
      })
      .onClose.subscribe((requestModal) => {
        if (requestModal) {
          this.send(requestModal);
        }
      });
  }
  send(requestModal) {
      this.ngOnInit();
  }
}
