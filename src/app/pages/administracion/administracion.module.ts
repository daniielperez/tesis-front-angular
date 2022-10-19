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
  // NbPopoverModule,
  // NbSearchModule,
  NbBadgeModule,
  NbSpinnerModule,
  NbUserModule,
} from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { FileDragNDropDirective } from "../../directive/file-drag-n-drop.directive";
import { ListErrorUploadComponent } from "./list-error-upload/list-error-upload.component";
import { Ng2SmartTableModule } from "ng2-smart-table";

const COMPONENTS = [
  UploadComponent,
  FileDragNDropDirective,
  ListErrorUploadComponent,
];

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
  Ng2SmartTableModule,
  NbBadgeModule,
];

@NgModule({
  imports: [...MODULES],
  // entryComponents: [CustomEditorComponent],
  exports: [...COMPONENTS],
  declarations: [
    ...routedAdminComponents,
    ...COMPONENTS,
    ListErrorUploadComponent,
  ],
})
export class AdministracionModule {}
