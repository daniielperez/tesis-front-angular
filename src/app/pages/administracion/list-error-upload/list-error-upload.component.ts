import { Component, Input, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

@Component({
  selector: "ngx-list-error-upload",
  templateUrl: "./list-error-upload.component.html",
  styleUrls: ["./list-error-upload.component.scss"],
})
export class ListErrorUploadComponent implements OnInit {
  @Input() errores: any;
  source: LocalDataSource = new LocalDataSource();
  settings = {
    // mode: "external",
    actions: {
      delete: false,
      add: false,
      edit: false,
      columnTitle: "Acciones",
      position: "right",
    },
    columns: {
      nombre: {
        title: "Nombre celda",
        type: "number",
      },
      value: {
        title: "Valor",
        type: "string",
      },
      motivo: {
        title: "Motivo",
        type: "string",
      },
    },
  };

  constructor() {}

  ngOnInit(): void {
    this.loadTable();
  }

  loadTable() {
    this.source.load(this.errores);
  }
}
