import { Component, OnDestroy, OnInit } from "@angular/core";
import { BloqueService } from "../../../_services";
import { Select } from "../../../_models";
import { Subject } from "rxjs";
import { NbMenuItem } from "@nebular/theme";
import { takeUntil } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit, OnDestroy {
  items: NbMenuItem[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();
  bloqueSelect;
  id;
  nombreEdificio;

  loading = true;
  salonComponent = false;

  bloquesListSelect: Select[];

  constructor(private _bloqueService: BloqueService, private router: Router) {}

  ngOnInit() {
    // this.id = this.route.snapshot.paramMap.get("id");
    // this.nombreEdificio = this.route.snapshot.paramMap.get("nombre");

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

    //busca los bloques por id edificio
    this._bloqueService
      .getSelect(this.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Select[]) => {
        this.bloquesListSelect = res;
        this.loading = false;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  onChangeBloque(bloque: any) {
    this.salonComponent = true;
    this._bloqueService.selectBloque(bloque);
  }

  // volver() {
  //   this.router.navigate(["pages/infraestructura/index/"]);
  // }
}
