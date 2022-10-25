import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NbDialogRef } from "@nebular/theme";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Select } from "../../../../_models";
import { PlanEstudioService } from "../../../../_services";
import { FormService } from "../../../../_services/form.service";

@Component({
  selector: "ngx-espacio-form",
  templateUrl: "./espacio-form.component.html",
  styleUrls: ["./espacio-form.component.scss"],
  providers: [FormService],
})
export class EspacioFormComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  form: FormGroup;
  selectPlanEstudios: Select[];
  constructor(
    protected ref: NbDialogRef<EspacioFormComponent>,
    private formService: FormService,
    public _planEstudioService: PlanEstudioService
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
    this.form = this.formService.newFormEspacio(this.form);
    this._planEstudioService
      .getAllSelect()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Select[]) => {
        this.selectPlanEstudios = res;
        console.log(this.selectPlanEstudios);
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
