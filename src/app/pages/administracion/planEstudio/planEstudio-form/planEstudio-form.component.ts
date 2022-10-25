import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NbDialogRef } from "@nebular/theme";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Select } from "../../../../_models";
import { ProgramaService } from "../../../../_services";
import { FormService } from "../../../../_services/form.service";

@Component({
  selector: "ngx-planEstudio-form",
  templateUrl: "./planEstudio-form.component.html",
  styleUrls: ["./planEstudio-form.component.scss"],
  providers: [FormService],
})
export class PlanEstudioFormComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  form: FormGroup;
  selectProgramas: Select[];
  constructor(
    protected ref: NbDialogRef<PlanEstudioFormComponent>,
    private formService: FormService,
    public _programaService: ProgramaService
  ) {}

  get f() {
    return this.form.controls;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.form = this.formService.newFormPlanEstudio(this.form);
    this._programaService
      .getAllSelect()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Select[]) => {
        this.selectProgramas = res;
      });
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
