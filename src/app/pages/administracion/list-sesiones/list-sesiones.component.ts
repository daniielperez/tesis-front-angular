import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { ViewEspacioAcademicoModalComponent } from '../view-espacioAcademico-modal/view-espacioAcademico-modal.component';

@Component({
  selector: 'ngx-list-sesiones',
  templateUrl: './list-sesiones.component.html',
  styleUrls: ['./list-sesiones.component.scss']
})
export class ListSesionesComponent implements OnInit {
  @Input() sesiones: any;
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
      salon: {
        title: "Salon",
        valuePrepareFunction: (cell, data) => {
          return data.salon.nombre;
        },
      },
      piso: {
        title: "Piso",
        valuePrepareFunction: (cell, data) => {
          return data.salon.piso.nombre;
        },
      },
    },
  };

  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
    this.source = this.sesiones;
  }

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
