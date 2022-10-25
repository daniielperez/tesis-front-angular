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
  NbContextMenuModule,
  NbMenuModule,
  NbActionsModule,
  NbAutocompleteModule,
  NbInputModule,
  NbTreeGridModule,
  NbTooltipModule,
  NbSelectModule,
  NbPopoverModule,
  NbTabsetModule,
  NbCheckboxModule,
  NbWindowModule,
  NbDialogModule,
} from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { FileDragNDropDirective } from "../../directive/file-drag-n-drop.directive";
import { ListErrorUploadComponent } from "./list-error-upload/list-error-upload.component";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ProgramaComponent } from "./programa/programa.component";
import { PlanEstudioListComponent } from "./planEstudio/planEstudio-list/planEstudio-list.component";
import { PlanEstudioFormComponent } from "./planEstudio/planEstudio-form/planEstudio-form.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { InfraestructuraRoutingModule } from "../infraestructura/infraestructura-routing.module";
import { EspacioFormComponent } from "./espacio/espacio-form/espacio-form.component";
import { EspacioListComponent } from "./espacio/espacio-list/espacio-list.component";

const COMPONENTS = [
  UploadComponent,
  ProgramaComponent,
  PlanEstudioListComponent,
  FileDragNDropDirective,
  ListErrorUploadComponent,
  PlanEstudioFormComponent,
  EspacioFormComponent,
  EspacioListComponent,
];

const MODULES = [
  AdministracionRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  NbDialogModule.forChild(),
  NbWindowModule.forChild(),
  NbCheckboxModule,
  NbTabsetModule,
  NbPopoverModule,
  NbButtonModule,
  NbSelectModule,
  NbTooltipModule,
  NbCardModule,
  NbTreeGridModule,
  NbIconModule,
  NbListModule,
  NbInputModule,
  NbAutocompleteModule,
  ThemeModule,
  InfraestructuraRoutingModule,
  Ng2SmartTableModule,
  NgSelectModule,
  NbUserModule,
  NbActionsModule,
  NbMenuModule,
  NbContextMenuModule,
  NbSpinnerModule,
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
