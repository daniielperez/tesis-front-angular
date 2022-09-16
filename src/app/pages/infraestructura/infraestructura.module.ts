import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  NbButtonModule,
  NbCardModule,
  NbTreeGridModule,
  NbIconModule,
  NbCheckboxModule,
  NbDialogModule,
  NbListModule,
  NbInputModule,
  NbPopoverModule,
  NbSelectModule,
  NbTabsetModule,
  NbTooltipModule,
  NbAutocompleteModule,
  NbWindowModule,
  NbUserModule,
  NbActionsModule,
  NbMenuModule,
  NbContextMenuModule,
  NbSpinnerModule,
} from "@nebular/theme";

import { Ng2SmartTableModule } from "ng2-smart-table";

import { ThemeModule } from "../../@theme/theme.module";
import {
  InfraestructuraRoutingModule,
  routedComponents,
} from "./infraestructura-routing.module";

import { CustomEditorComponent } from "./smart-table/custom-editor.component";
import { DialogNamePromptComponent } from "./dialog-name-prompt/new-sede.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { IndexComponent } from "./index/index.component";
import { EdificioFormComponent } from "./edificio-form/edificio-form.component";
import { EdificioListComponent } from "./edificio-list/edificio-list.component";
import { SalonListComponent } from "./salon-list/salon-list.component";
import { BloqueFormComponent } from "./bloque-form/bloque-form.component";
import { TipoSalonListComponent } from "./tipoSalon-list/tipoSalon-list.component";

const COMPONENTS = [
  CustomEditorComponent,
  DialogNamePromptComponent,
  EdificioFormComponent,
];

const MODULES = [
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
  entryComponents: [CustomEditorComponent],
  exports: [...COMPONENTS],
  declarations: [
    ...routedComponents,
    ...COMPONENTS,
    IndexComponent,
    EdificioFormComponent,
    EdificioListComponent,
    SalonListComponent,
    BloqueFormComponent,
    TipoSalonListComponent,
  ],
})
export class InfraestructuraModule {}
