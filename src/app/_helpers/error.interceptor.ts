import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { AuthenticationService } from "../_services";
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
} from "@nebular/theme";
import { Router } from "@angular/router";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  position: NbGlobalPosition = NbGlobalPhysicalPosition.BOTTOM_RIGHT;
  index = 1;
  constructor(
    private authenticationService: AuthenticationService,
    private toastrService: NbToastrService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: any) => {
        let status: NbComponentStatus = "danger";
        if (
          [401, 403].includes(err.status) &&
          this.authenticationService.userValue
        ) {
          // auto logout if 401 or 403 response returned from api
          if (err.statusText == "Forbidden") {
            this.showToast(status, "¡Oh cielos!", "Permisos insuficientes");
            this.router.navigate(["/login"]);
          }
        }
        const error = (err && err.error && err.error.message) || err.statusText;
        // console.error(err);
        return throwError(error);
      })
    );
  }

  showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 8000,
      hasIcon: true,
      position: this.position,
      preventDuplicates: false,
    };
    const titleContent = title ? `${title}` : "";

    this.index += 1;

    this.toastrService.show(body, `${titleContent}`, config);
  }
}
