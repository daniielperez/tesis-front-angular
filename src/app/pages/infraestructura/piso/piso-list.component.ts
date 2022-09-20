import { Component, OnDestroy, OnInit } from "@angular/core";
import { BloqueService, PisoService } from "../../../_services";
import { NbMenuItem } from "@nebular/theme";
import { LocalDataSource } from "ng2-smart-table";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Bloque, Piso } from "../../../_models";
// import { PisoFormComponent } from "../piso-form/piso-form.component";

@Component({
  selector: "ngx-piso-list",
  templateUrl: "./piso-list.component.html",
  styleUrls: ["./piso-list.component.scss"],
})
export class PisoListComponent implements OnInit, OnDestroy {
  bloqueSelect: Bloque;

  load = true;

  destroy$: Subject<boolean> = new Subject<boolean>();

  items: NbMenuItem[] = [];

  settings = {
    // mode: "external",
    actions: {
      // add: false,
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

  constructor(
    private _bloqueService: BloqueService,
    private pisoService: PisoService
  ) {
    this.bloqueSelect = this._bloqueService.getBloque();
  }

  ngOnInit(): void {
    this._bloqueService.changeSelect
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: Bloque) => {
        this.bloqueSelect = data;
        this.loadTable();
      });
    this.loadTable();
  }

  loadTable() {
    this.pisoService
      .getAll(this.bloqueSelect.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Piso[]) => {
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
    event.newData.idBloque = this.bloqueSelect.id;
    this.send(event.newData);
    event.confirm.resolve();
  }

  onSaveConfirm(event) {
    event.newData.idBloque = this.bloqueSelect.id;
    console.log(event.newData);
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
    this.pisoService
      .insert(data)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.loadTable();
      });
  }
}
