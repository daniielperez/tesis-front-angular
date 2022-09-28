import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { AuthenticationService } from "../../_services";
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
} from "@nebular/theme";
// import { NbThemeService } from "@nebular/theme";

@Component({
  templateUrl: "login.component.html",
  styleUrls: ["login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = "";
  position: NbGlobalPosition = NbGlobalPhysicalPosition.BOTTOM_RIGHT;
  status: NbComponentStatus = "danger";
  index = 1;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: NbToastrService,
    private authenticationService: AuthenticationService // private themeService: NbThemeService
  ) {
    // this.themeService.changeTheme("cosmic");

    // redirect to home if already logged in
    if (this.authenticationService.userValue) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [""],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(12),
        ],
      ],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    let status: NbComponentStatus = "success";
    this.authenticationService
      .login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate([this.returnUrl]);
        },
        error: (error) => {
          this.showToast(this.status, "¡Oh cielos!", error);
          this.error = error;
          this.loading = false;
        },
      });
  }

  showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 6000,
      hasIcon: true,
      position: this.position,
      preventDuplicates: false,
    };
    const titleContent = title ? `${title}` : "";

    this.index += 1;

    this.toastrService.show(body, `${titleContent}`, config);
  }
}
