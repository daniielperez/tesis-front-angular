import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { ViewEspacioAcademicoModalComponent } from '../view-espacioAcademico-modal/view-espacioAcademico-modal.component';

@Component({
  selector: 'ngx-list-matricula',
  templateUrl: './list-matricula.component.html',
  styleUrls: ['./list-matricula.component.scss']
})
export class ListMatriculaComponent implements OnInit {

  @Input() matriculas:any;
  source: LocalDataSource = new LocalDataSource();
  settings = {

    mode: "external",
    actions: {
      
      delete: false,
      add: false,
      edit: false,
      columnTitle: "Acciones",
      position: "right",
      custom: [
        {
          name: 'Detalle',
          title: '<i class="fa fa-eye" title="Detalle"></i>'
        }
      ],
    },
    columns: {
      semestre: {
        title: "Semestre",
        type: "number",
      },
      estudianteNombre: {
        title: "Nombres",
        valuePrepareFunction: (cell, data) => {
          return data.usuario.nombres + ' ' + data.usuario.apellidos
        },
      },
      estudianteCedula: {
        title: "Identificacion",
        valuePrepareFunction: (cell, data) => {
          return data.usuario.documento
        },
      },
      email: {
        title: "Correo",
        valuePrepareFunction: (cell, data) => {
          return data.usuario.email
        },
      },
    },
  };

  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
    this.source = this.matriculas;
  }

  // onCustom(event) {
  //   console.log(event.data)
  //   alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`)
  // }

  onCustom(event) {
    this.dialogService
      .open(ViewEspacioAcademicoModalComponent, {
        closeOnBackdropClick: false,
        context: {
          matricula: event.data,
        },
      })
      .onClose.subscribe((requestModal) => {
        if (requestModal) {
          this.send(requestModal);
        }
      });
  }
  send(requestModal) {
      // this.ngOnInit();
  }

}
