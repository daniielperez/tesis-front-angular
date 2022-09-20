import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InfraestructuraComponent } from "./infraestructura.component";
import { SmartTableComponent } from "./salon/table/table-salon.component";
import { IndexComponent } from "./index/index.component";
import { EdificioListComponent } from "./edificio/edificio-list/edificio-list.component";
import { BloqueListComponent } from "./bloque/bloque-list/bloque-list.component";
import { PisoListComponent } from "./piso/piso-list.component";
import { TipoSalonListComponent } from "./tipoSalon/tipoSalon-list.component";

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
      {
        path: "tipoSalon",
        component: TipoSalonListComponent,
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
