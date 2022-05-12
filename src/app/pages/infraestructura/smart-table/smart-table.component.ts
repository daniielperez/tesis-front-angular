import { Component, OnDestroy, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { takeUntil } from "rxjs/operators";

// import { CustomEditorComponent } from "./custom-editor.component";

import { SedeService } from "../../../_services";
import { Subject } from "rxjs";
import { HttpResponse } from "@angular/common/http";
import { Sede } from "../../../_models";
import { NbDialogService } from "@nebular/theme";

import { DialogNamePromptComponent } from "../dialog-name-prompt/new-sede.component";

@Component({
  selector: "ngx-smart-table",
  templateUrl: "./smart-table.component.html",
  styleUrls: ["./smart-table.component.scss"],
})
export class SmartTableComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  settings = {
    mode: "external",
    actions: {
      // add: false,
      columnTitle: "Acciones",
      position: "right",
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: "ID",
        type: "number",
      },
      nombre: {
        title: "Nombre",
        type: "string",
      },
      direccion: {
        title: "Direccion",
        type: "string",
      },
      telefono: {
        title: "Telefono",
        type: "number",
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private sedeService: SedeService,
    private dialogService: NbDialogService
  ) {}

  ngOnInit(): void {
    this.loadTable();
  }

  loadTable() {
    this.sedeService
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: HttpResponse<Sede[]>) => {
        console.log(res);
        this.source.load(res.body);
      });
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      console.log("Acepta");
    } else {
      console.log("Rechaza");
    }
  }

  onEdit(event): void {
    this.dialogService
      .open(DialogNamePromptComponent, {
        context: { form: event.data },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe((requestModal) => {
        if (requestModal) {
          this.send(requestModal);
        }
      });
  }

  onCreate() {
    this.dialogService
      .open(DialogNamePromptComponent, {
        closeOnBackdropClick: false,
      })
      .onClose.subscribe((requestModal) => {
        if (requestModal) {
          this.send(requestModal);
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  send(requestModal) {
    this.sedeService
      .insert(requestModal.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.loadTable();
      });
  }
}
