import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InfraestructuraComponent } from "./infraestructura.component";
import { SmartTableComponent } from "./smart-table/smart-table.component";
import { IndexComponent } from "./index/index.component";
import { EdificioListComponent } from "./edificio-list/edificio-list.component";
import { BloqueListComponent } from "./bloque-list/bloque-list.component";
import { PisoListComponent } from "./piso-list/piso-list.component";

const routes: Routes = [
  {
    path: "",
    component: InfraestructuraComponent,
    children: [
      {
        path: "smart-table",
        component: SmartTableComponent,
      },
      {
        path: "index",
        component: EdificioListComponent,
      },
      {
        path: "edificio",
        component: IndexComponent,
      },
      {
        path: "bloque",
        component: BloqueListComponent,
      },
      {
        path: "piso",
        component: PisoListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfraestructuraRoutingModule {}

export const routedComponents = [
  InfraestructuraComponent,
  SmartTableComponent,
  BloqueListComponent,
  PisoListComponent,
];
