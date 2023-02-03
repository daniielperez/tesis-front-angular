import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlanEstudio } from "../../_models";
import { Horario } from "../../_models/horario";
import { AdministracionComponent } from "./administracion.component";
import { CargaDetailComponent } from "./carga-detail/carga-detail.component";
import { EspacioListComponent } from "./espacio/espacio-list/espacio-list.component";
import { HorarioComponent } from "./horario/horario.component";
import { PlanEstudioListComponent } from "./planEstudio/planEstudio-list/planEstudio-list.component";
import { ProgramaComponent } from "./programa/programa.component";
import { SearchPersonComponent } from "./search-person/search-person.component";
import { TabUploadComponent } from "./tabUpload/tabUpload.component";
import { UploadComponent } from "./upload/upload.component";

const routes: Routes = [
  {
    path: "",
    component: AdministracionComponent,
    children: [
      {
        path: "subir-archivo",
        component: TabUploadComponent,
      },
      {
        path: "programa",
        component: ProgramaComponent,
      },
      {
        path: "plan-estudios",
        component: PlanEstudioListComponent,
      },
      {
        path: "espacio-academicos",
        component: EspacioListComponent,
      },
      {
        path: "full-calendar",
        component: HorarioComponent,
      },
      {
        path: "search-person",
        component: SearchPersonComponent,
      },
      {
        path: "carga-detail",
        component: CargaDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministracionRoutingModule {}

export const routedAdminComponents = [AdministracionComponent, UploadComponent];
