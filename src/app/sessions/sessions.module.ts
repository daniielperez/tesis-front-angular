import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SessionsRoutingModule } from "./sessions-routing.module";
import { LoginComponent } from "./login/login.component";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { ThemeModule } from "../@theme/theme.module";

import {
  NbAlertModule,
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbUserModule,
} from "@nebular/theme";

@NgModule({
  imports: [
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbIconModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SessionsRoutingModule,
    NbAlertModule,
    ThemeModule,
  ],
  declarations: [LoginComponent],
})
export class SessionsModule {}
