import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdministracionComponent } from "./administracion.component";
import { UploadComponent } from "./upload/upload.component";

const routes: Routes = [
  {
    path: "",
    component: AdministracionComponent,
    children: [
      {
        path: "subir-archivo",
        component: UploadComponent,
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
