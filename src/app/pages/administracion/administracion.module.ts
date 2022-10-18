import { NgModule } from "@angular/core";
import { UploadComponent } from "./upload/upload.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import {
  AdministracionRoutingModule,
  routedAdminComponents,
} from "./administracion-routing.module";
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbListModule,
  NbPopoverModule,
  NbSearchModule,
  NbSpinnerModule,
  NbUserModule,
} from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { FileDragNDropDirective } from "../../directive/file-drag-n-drop.directive";

const COMPONENTS = [UploadComponent, FileDragNDropDirective];

const MODULES = [
  AdministracionRoutingModule,
  NbListModule,
  NbCardModule,
  FormsModule,
  ThemeModule,
  ReactiveFormsModule,
  NbCardModule,
  NbUserModule,
  NbIconModule,
  NbSpinnerModule,
  NbButtonModule,
];

@NgModule({
  imports: [...MODULES],
  // entryComponents: [CustomEditorComponent],
  exports: [...COMPONENTS],
  declarations: [...routedAdminComponents, ...COMPONENTS],
})
export class AdministracionModule {}
