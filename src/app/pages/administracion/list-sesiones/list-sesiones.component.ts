import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { ViewEspacioAcademicoModalComponent } from '../view-espacioAcademico-modal/view-espacioAcademico-modal.component';
import { DatePipe } from '@angular/common';
import { ECommerceUserActivityComponent } from '../user-activity/user-activity.component';
import { log } from 'console';

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
      fecha: {
        title: "Fecha",
        valuePrepareFunction: (cell, data) => {
          return this.datePipe.transform(data.fechain,'yyyy-MM-dd');
        },
      },
      hInicio: {
        title: "Inicio",
        valuePrepareFunction: (cell, data) => {
          return this.datePipe.transform(data.hentrada,'h:mm a');
        },
      },
      hFin: {
        title: "Fin",
        valuePrepareFunction: (cell, data) => {
          return this.datePipe.transform(data.hsalida,'h:mm a');
        },
      },

    },
  };

  constructor(private dialogService: NbDialogService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.source = this.sesiones;
  }

  onCustom(event) {
    this.dialogService
      .open(ECommerceUserActivityComponent, {
        closeOnBackdropClick: true,
        context: {
          userType: "DOCENTE",
          actividades: event.data.actividades
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
