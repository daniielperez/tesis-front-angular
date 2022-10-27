import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlanEstudio } from "../../_models";
import { AdministracionComponent } from "./administracion.component";
import { EspacioListComponent } from "./espacio/espacio-list/espacio-list.component";
import { PlanEstudioListComponent } from "./planEstudio/planEstudio-list/planEstudio-list.component";
import { ProgramaComponent } from "./programa/programa.component";
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministracionRoutingModule {}

export const routedAdminComponents = [AdministracionComponent, UploadComponent];
