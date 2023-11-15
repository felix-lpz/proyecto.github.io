import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VenListClienteComponent } from './cliente/component/ven-list-cliente/ven-list-cliente.component';
import { VenListProductoComponent } from './producto/componente/ven-list-producto/ven-list-producto.component';
import { VenListTrasporteComponent } from './trasporte/componente/ven-list-trasporte/ven-list-trasporte.component';

const routes: Routes = [
  {
    path: 'cliente', component:VenListClienteComponent
  },
  {
    path: 'producto', component: VenListProductoComponent
  },
  {
    path: 'trasporte', component: VenListTrasporteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaRoutingModule { }
