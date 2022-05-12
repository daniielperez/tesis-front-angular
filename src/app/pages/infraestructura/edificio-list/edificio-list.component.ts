import { Component, OnDestroy, OnInit } from "@angular/core";
import { EdificioService } from "../../../_services";
import { NbDialogService } from "@nebular/theme";
import { EdificioFormComponent } from "../edificio-form/edificio-form.component";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { Edificio } from "../../../_models";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "ngx-edificio-list",
  templateUrl: "./edificio-list.component.html",
  styleUrls: ["./edificio-list.component.scss"],
})
export class EdificioListComponent implements OnInit, OnDestroy {
  loading = true;
  destroy$: Subject<boolean> = new Subject<boolean>();
  edificios: Edificio[];
  id;

  constructor(
    private dialogService: NbDialogService,
    private _edificioService: EdificioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    this._edificioService
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Edificio[]) => {
        this.edificios = res;
        this.loading = false;
      });
  }

  onSelect(edificio) {
    // this.router.navigate([
    //   "pages/infraestructura/edificio/",
    //   { id: edificio.id, nombre: edificio.nombre },
    // ]);

    this.router.navigate(["pages/infraestructura/edificio"], {
      queryParams: { id: edificio.id, nombre: edificio.nombre },
    });
  }

  onCreate() {
    this.dialogService
      .open(EdificioFormComponent, {
        closeOnBackdropClick: false,
      })
      .onClose.subscribe((requestModal) => {
        if (requestModal) {
          this.send(requestModal);
        }
      });
  }

  onEdit(event): void {
    this.dialogService
      .open(EdificioFormComponent, {
        context: { form: event },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe((requestModal) => {
        if (requestModal) {
          this.send(requestModal);
        }
      });
  }

  send(requestModal) {
    this._edificioService
      .insert(requestModal.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.ngOnInit();
      });
  }
}
