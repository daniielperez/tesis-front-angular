import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ViewEspacioAcademicoModalComponent } from '../view-espacioAcademico-modal/view-espacioAcademico-modal.component';

@Component({
  selector: 'ngx-matriculas-estudiante',
  templateUrl: './matriculas-estudiante.component.html',
  styleUrls: ['./matriculas-estudiante.component.scss']
})
export class MatriculasEstudianteComponent implements OnInit {
  @Input() matriculas: any;
  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
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
