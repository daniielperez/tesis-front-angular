import { Component, OnDestroy, OnInit } from "@angular/core";
import { BloqueService, TipoSalonService } from "../../../_services";
import { LocalDataSource } from "ng2-smart-table";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { TipoSalon } from "../../../_models";
// import { TipoSalonFormComponent } from "../tipoSalon-form/tipoSalon-form.component";

@Component({
  selector: "ngx-table-salon-list",
  templateUrl: "./tipoSalon-list.component.html",
  styleUrls: ["./tipoSalon-list.component.scss"],
})
export class TipoSalonListComponent implements OnInit, OnDestroy {
  load = true;

  destroy$: Subject<boolean> = new Subject<boolean>();

  settings = {
    // mode: "external",
    actions: {
      delete: false,
      columnTitle: "Acciones",
      position: "right",
    },
    add: {
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      addButtonContent: '<i class="nb-plus"></i>',
      confirmCreate: true,
    },
    edit: {
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      editButtonContent: '<i class="nb-edit"></i>',
      confirmSave: true,
    },
    // delete: false,
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
    },
    columns: {
      id: {
        title: "ID",
        type: "number",
        editable: false,
        addable: false,
      },
      nombre: {
        title: "Nombre",
        type: "string",
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private tipoSalonService: TipoSalonService) {}

  ngOnInit(): void {
    this.loadTable();
  }

  loadTable() {
    this.tipoSalonService
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: TipoSalon[]) => {
        this.source.load(res);
        this.load = false;
      });
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      console.log("Acepta");
    } else {
      console.log("Rechaza");
    }
  }

  onCreateConfirm(event) {
    if (event.newData.nombre) {
      this.send(event.newData);
      event.confirm.resolve();
    }
  }

  onSaveConfirm(event) {
    this.send(event.newData);
    event.confirm.resolve();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  send(data) {
    this.load = true;
    this.tipoSalonService
      .insert(data)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.loadTable();
      });
  }
}
