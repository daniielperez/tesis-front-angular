import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./_helpers";
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from "@nebular/auth";

export const routes: Routes = [
  {
    path: "pages",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./sessions/sessions.module").then((m) => m.SessionsModule),
  },
  // {
  //   path: "auth",
  //   component: NbAuthComponent,
  //   children: [
  //     {
  //       path: "",
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: "login",
  //       component: NbLoginComponent,
  //     },
  //     {
  //       path: "register",
  //       component: NbRegisterComponent,
  //     },
  //     {
  //       path: "logout",
  //       component: NbLogoutComponent,
  //     },
  //     {
  //       path: "request-password",
  //       component: NbRequestPasswordComponent,
  //     },
  //     {
  //       path: "reset-password",
  //       component: NbResetPasswordComponent,
  //     },
  //   ],
  // },

  { path: "", redirectTo: "pages", pathMatch: "full" },
  { path: "**", redirectTo: "pages" },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
