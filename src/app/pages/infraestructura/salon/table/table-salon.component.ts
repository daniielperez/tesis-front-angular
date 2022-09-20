import { Component, OnDestroy, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { takeUntil } from "rxjs/operators";

// import { CustomEditorComponent } from "./custom-editor.component";

import { PisoService, SalonService } from "../../../../_services/index";
import { Subject } from "rxjs";
import { HttpResponse } from "@angular/common/http";
import { Piso, Salon } from "../../../../_models";
import { NbDialogService } from "@nebular/theme";

import { SalonFormComponent } from "../salon-form/salon-form.component";

@Component({
  selector: "ngx-table-salon",
  templateUrl: "./table-salon.component.html",
  styleUrls: ["./table-salon.component.scss"],
})
export class SmartTableComponent implements OnInit, OnDestroy {
  load: boolean = true;
  pisoSelect: Piso;
  salones: Salon[];
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
      // nombre: {
      //   title: "nombre",
      //   editor: {
      //     type: "custom",
      //     component: CustomEditorComponent,
      //   },
      // },
      nombre: {
        title: "Nombre",
        type: "string",
      },
      cupo: {
        title: "Cupo",
        type: "string",
      },
      dimension: {
        title: "Dimensiones(m²)",
        type: "number",
      },
      codDispositivo: {
        title: "Dispositivo",
        type: "number",
      },
      nomTipoSalon: {
        title: "nomTipoSalon",
        type: "string",
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private dialogService: NbDialogService,
    private _pisoService: PisoService,
    private _salonService: SalonService
  ) {}

  ngOnInit(): void {
    console.log("daniel");
    this.pisoSelect = this._pisoService.getPiso();
    this.loadTable();
    this._pisoService.changeSelect.subscribe((data: Piso) => {
      this.pisoSelect = data;
      this.load = true;
      this.loadTable();
    });
  }

  loadTable() {
    this._salonService
      .getAll(this.pisoSelect.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Salon[]) => {
        console.log(res);
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

  onEdit(event): void {
    this.dialogService
      .open(SalonFormComponent, {
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
      .open(SalonFormComponent, {
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
    this.destroy$.unsubscribe();
  }

  send(requestModal) {
    this.load = true;
    requestModal.value.idPiso = this.pisoSelect.id;
    this._salonService
      .insert(requestModal.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.loadTable();
      });
  }
}
