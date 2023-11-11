import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdListAreaComponent } from './area/componente/prod-list-area/prod-list-area.component';
import { ProdListEmpComponent } from './empleado/componente/prod-list-emp/prod-list-emp.component';

const routes: Routes = [
  {
    path:'area', component: ProdListAreaComponent
  },
  {
    path: 'empleado', component: ProdListEmpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduccionRoutingModule { }
