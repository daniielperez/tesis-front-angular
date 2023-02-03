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
  NbToggleModule,
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
import { TabUploadComponent } from "./tabUpload/tabUpload.component";
import { HorarioComponent } from "./horario/horario.component";
import { CargaDocenteComponent } from "./carga-docente/carga-docente.component";
import { InfoPersonaComponent } from "./info-persona/info-persona.component";
import { MatriculasEstudianteComponent } from "./matriculas-estudiante/matriculas-estudiante.component";
import { FullCalendarModule } from "@fullcalendar/angular";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { SearchPersonComponent } from "./search-person/search-person.component";
import { ECommerceUserActivityComponent } from "./user-activity/user-activity.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { ViewEspacioAcademicoModalComponent } from "./view-espacioAcademico-modal/view-espacioAcademico-modal.component";
import { CargaDetailComponent } from "./carga-detail/carga-detail.component";

const COMPONENTS = [
  UploadComponent,
  ProgramaComponent,
  PlanEstudioListComponent,
  FileDragNDropDirective,
  PlanEstudioFormComponent,
  EspacioFormComponent,
  EspacioListComponent,
  TabUploadComponent,
  ListErrorUploadComponent,
  HorarioComponent,
  SearchPersonComponent,
  ECommerceUserActivityComponent,
  ViewEspacioAcademicoModalComponent,
  ContactsComponent,
  MatriculasEstudianteComponent,
  InfoPersonaComponent,
  CargaDocenteComponent,
  CargaDetailComponent
];

const MODULES = [
  AdministracionRoutingModule,
  FullCalendarModule,
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
  NbBadgeModule,
  NbToggleModule,
];

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin,
]);

@NgModule({
  imports: [...MODULES],
  // entryComponents: [CustomEditorComponent],
  exports: [...COMPONENTS],
  declarations: [
    ...routedAdminComponents,
    ...COMPONENTS,
    SearchPersonComponent,
  ],
})
export class AdministracionModule {}
