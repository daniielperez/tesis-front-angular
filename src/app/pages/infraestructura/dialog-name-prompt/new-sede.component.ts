import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NbDialogRef } from "@nebular/theme";
import { FormService, ExtensionService } from "../../../_services";
import { HttpResponse } from "@angular/common/http";
import { Select } from "../../../_models";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "app-new-sede",
  templateUrl: "./new-sede.component.html",
  styleUrls: ["./new-sede.component.scss"],
  providers: [FormService],
})
export class DialogNamePromptComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  form: FormGroup;
  selectExtension: Select[];
  constructor(
    protected ref: NbDialogRef<DialogNamePromptComponent>,
    private formService: FormService,
    private extensionService: ExtensionService
  ) {}

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    this.form = this.formService.newFormSede(this.form);

    this.extensionService
      .getSelect()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Select[]) => {
        this.selectExtension = res;
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
      if (window.confirm("¿Confirmar envio?")) {
        this.ref.close(this.form);
      }
    }
  }
}
