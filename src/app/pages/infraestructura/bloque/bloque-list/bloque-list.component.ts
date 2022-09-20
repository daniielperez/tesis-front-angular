import { HttpResponse } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BloqueService } from "../../../../_services";
import { NbDialogService, NbMenuItem } from "@nebular/theme";
import { LocalDataSource } from "ng2-smart-table";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Bloque } from "../../../../_models";
import { BloqueFormComponent } from "../bloque-form/bloque-form.component";

@Component({
  selector: "ngx-bloque-list",
  templateUrl: "./bloque-list.component.html",
  styleUrls: ["./bloque-list.component.scss"],
})
export class BloqueListComponent implements OnInit, OnDestroy {
  id;
  nombreEdificio;

  load: boolean = true;

  destroy$: Subject<boolean> = new Subject<boolean>();

  items: NbMenuItem[] = [];

  settings = {
    mode: "external",
    actions: {
      // add: false,
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
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private router: Router,
    private bloqueService: BloqueService,
    private dialogService: NbDialogService
  ) {}

  ngOnInit(): void {
    let urlTree = this.router.parseUrl(this.router.url);

    this.id = urlTree.queryParams["id"];
    this.nombreEdificio = urlTree.queryParams["nombre"];

    this.items = [
      {
        title: "Edicion de edificio",
        icon: "person-outline",
        pathMatch: "prefix",
        link: "/pages/infraestructura/edificio",
        queryParams: {
          id: this.id,
          nombre: this.nombreEdificio,
        },
      },
      {
        title: "Bloques",
        icon: "person-outline",
        link: "/pages/infraestructura/bloque",
        queryParams: {
          id: this.id,
          nombre: this.nombreEdificio,
        },
      },
    ];

    this.loadTable();
  }

  loadTable() {
    this.bloqueService
      .getAll(this.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Bloque[]) => {
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
      .open(BloqueFormComponent, {
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
      .open(BloqueFormComponent, {
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
    this.bloqueService
      .insert(requestModal.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.loadTable();
      });
  }
}
