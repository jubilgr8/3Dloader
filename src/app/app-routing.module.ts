import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CubeComponent } from './cube/cube.component';
import { ModelComponent } from './model/model.component';
import { DesignsComponent } from './designs/designs.component';

const routes: Routes = [
  {
    path: "",
    component: DesignsComponent
  },
  {
    path: "model",
    component: ModelComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
