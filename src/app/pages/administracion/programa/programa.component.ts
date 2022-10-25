import { Component, OnDestroy, OnInit } from "@angular/core";
import { ProgramaService } from "../../../_services";
import { LocalDataSource } from "ng2-smart-table";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Programa } from "../../../_models";
// import { ProgramaFormComponent } from "../programa-form/programa-form.component";

@Component({
  selector: "ngx-table-salon",
  templateUrl: "./programa.component.html",
  styleUrls: ["./programa.component.scss"],
})
export class ProgramaComponent implements OnInit, OnDestroy {
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

  constructor(private programaService: ProgramaService) {}

  ngOnInit(): void {
    this.loadTable();
  }

  loadTable() {
    this.programaService
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Programa[]) => {
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
    this.programaService
      .insert(data)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.loadTable();
      });
  }
}
