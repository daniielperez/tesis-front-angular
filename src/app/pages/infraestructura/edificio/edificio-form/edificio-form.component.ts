import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NbDialogRef } from "@nebular/theme";
import { FormService } from "../../../../_services/form.service";

@Component({
  selector: "ngx-edificio-form",
  templateUrl: "./edificio-form.component.html",
  styleUrls: ["./edificio-form.component.scss"],
  providers: [FormService],
})
export class EdificioFormComponent implements OnInit {
  form: FormGroup;
  constructor(
    protected ref: NbDialogRef<EdificioFormComponent>,
    private formService: FormService
  ) {}

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    this.form = this.formService.newFormEdificio(this.form);
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
