import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NbDialogRef } from "@nebular/theme";
import { FormService, TipoSalonService } from "../../../../_services";
import { Select } from "../../../../_models";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "app-salon-form",
  templateUrl: "./salon-form.component.html",
  styleUrls: ["./salon-form.component.scss"],
  providers: [FormService],
})
export class SalonFormComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  form: FormGroup;
  selectTipoSalon: Select[];
  constructor(
    protected ref: NbDialogRef<SalonFormComponent>,
    private formService: FormService,
    private _tipoSalonService: TipoSalonService
  ) {}

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    this.form = this.formService.newFormSalon(this.form);

    this._tipoSalonService
      .getSelect()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Select[]) => {
        this.selectTipoSalon = res;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  cancel() {
    this.ref.close();
  }

  onSubmit() {
    if (this.form.status == "VALID") {
      // if (window.confirm("¿Confirmar envio?")) {
      this.ref.close(this.form);
      // }
    }
  }
}
