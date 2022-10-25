import { HttpResponse } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PlanEstudioService } from "../../../../_services";
import { NbDialogService, NbMenuItem } from "@nebular/theme";
import { LocalDataSource } from "ng2-smart-table";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { PlanEstudio } from "../../../../_models";
import { PlanEstudioFormComponent } from "../planEstudio-form/planEstudio-form.component";

@Component({
  selector: "ngx-planEstudio-list",
  templateUrl: "./planEstudio-list.component.html",
  styleUrls: ["./planEstudio-list.component.scss"],
})
export class PlanEstudioListComponent implements OnInit, OnDestroy {
  id;
  nombreEdificio;

  load: boolean = true;

  destroy$: Subject<boolean> = new Subject<boolean>();

  items: NbMenuItem[] = [];

  settings = {
    mode: "external",
    actions: {
      delete: false,
      columnTitle: "Acciones",
      position: "right",
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
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
      nombrePrograma: {
        title: "Programa",
        // valuePrepareFunction: (value) => {
        //   return value.nombre;
        // },
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private router: Router,
    private planEstudioService: PlanEstudioService,
    private dialogService: NbDialogService
  ) {}

  ngOnInit(): void {
    let urlTree = this.router.parseUrl(this.router.url);

    this.id = urlTree.queryParams["id"];
    this.nombreEdificio = urlTree.queryParams["nombre"];

    this.loadTable();
  }

  loadTable() {
    this.planEstudioService
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: PlanEstudio[]) => {
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
      .open(PlanEstudioFormComponent, {
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
      .open(PlanEstudioFormComponent, {
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
    this.load = true;
    requestModal.value.programa = {
      id: requestModal.value.idPrograma,
    };
    console.log(requestModal.value);
    this.planEstudioService
      .insert(requestModal.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.loadTable();
      });
  }
}
