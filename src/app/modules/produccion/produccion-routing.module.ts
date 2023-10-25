import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdListAreaComponent } from './area/componente/prod-list-area/prod-list-area.component';

const routes: Routes = [
  {
    path:'area', component: ProdListAreaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduccionRoutingModule { }
