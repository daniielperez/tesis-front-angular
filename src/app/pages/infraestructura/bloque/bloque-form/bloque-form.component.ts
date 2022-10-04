import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { NbDialogRef } from "@nebular/theme";
import { FormService } from "../../../../_services/form.service";

@Component({
  selector: "ngx-bloque-form",
  templateUrl: "./bloque-form.component.html",
  styleUrls: ["./bloque-form.component.scss"],
  providers: [FormService],
})
export class BloqueFormComponent implements OnInit {
  form: FormGroup;
  id;
  constructor(
    protected ref: NbDialogRef<BloqueFormComponent>,
    private formService: FormService,
    private router: Router
  ) {}

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    let urlTree = this.router.parseUrl(this.router.url);
    this.id = urlTree.queryParams["id"];
    this.form = this.formService.newFormBloque(this.form);
    this.form.controls["idEdificio"].setValue(this.id);
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
