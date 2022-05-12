import { HttpResponse } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Select, Bloque, Piso } from "../../../_models";
import { BloqueService, PisoService } from "../../../_services";

@Component({
  selector: "ngx-salon-list",
  templateUrl: "./salon-list.component.html",
  styleUrls: ["./salon-list.component.scss"],
})
export class SalonListComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  bloqueSelect: Bloque;
  pisosListSelect: Select[];
  salones;
  pisoSelect: any = false;

  loadPisos: boolean = true;
  loadSalones: boolean = false;

  containerConfigPisos: boolean = false;
  containerListSalones: boolean = true;

  constructor(
    private _bloqueService: BloqueService,
    private pisoService: PisoService
  ) {
    this.bloqueSelect = this._bloqueService.getBloque();
    this.getPisosSelected(this.bloqueSelect.id);
  }

  ngOnInit(): void {
    this._bloqueService.change.subscribe((data: Bloque) => {
      this.bloqueSelect = data;
      this.salones = null;
      this.resetContainers();
      this.getPisosSelected(this.bloqueSelect.id);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  getPisosSelected(bloqueId: any) {
    this.loadPisos = true;
    this.pisoService
      .getSelect(bloqueId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Select[]) => {
        this.loadPisos = false;
        this.pisosListSelect = res;
        console.log(this.pisosListSelect);
      });
  }

  onChangePiso(piso: any) {
    this.getSalones(piso);
  }

  getSalones(piso: any) {
    this.loadSalones = true;

    this.pisoService
      .getSelect(this.bloqueSelect.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Select[]) => {
        this.salones = res;
        this.resetContainers();
        this.containerListSalones = true;
        this.loadSalones = false;
      });
  }

  onConfigPisos(bloqueId: number) {
    this.salones = null;
    this.resetContainers();
    this.containerConfigPisos = true;
  }

  onListSalones(event: any) {
    this.resetContainers();
    this.salones = null;
    this.pisosListSelect = null;
    this.getPisosSelected(this.bloqueSelect.id);
    this.containerListSalones = true;
  }

  resetContainers() {
    this.containerConfigPisos = false;
    this.containerListSalones = false;
  }
}
