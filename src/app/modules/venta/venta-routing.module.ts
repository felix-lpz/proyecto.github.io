import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VenListClienteComponent } from './cliente/component/ven-list-cliente/ven-list-cliente.component';

const routes: Routes = [
  {
    path: 'cliente', component:VenListClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaRoutingModule { }
