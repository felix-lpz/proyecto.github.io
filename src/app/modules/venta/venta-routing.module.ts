import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VenListClienteComponent } from './cliente/component/ven-list-cliente/ven-list-cliente.component';
import { VenListProductoComponent } from './producto/componente/ven-list-producto/ven-list-producto.component';
import { VenListTrasporteComponent } from './trasporte/componente/ven-list-trasporte/ven-list-trasporte.component';
import { VenListOrdenComponent } from './orden/componente/ven-list-orden/ven-list-orden.component';
import { VenListModeloComponent } from './modelo/componente/ven-list-modelo/ven-list-modelo.component';
import { VenListCreditoComponent } from './credito/componente/ven-list-credito/ven-list-credito.component';

const routes: Routes = [
  {
    path: 'cliente', component:VenListClienteComponent
  },
  {
    path: 'producto', component: VenListProductoComponent
  },
  {
    path: 'trasporte', component: VenListTrasporteComponent
  },
  {
    path: 'orden', component: VenListOrdenComponent
  },
  {
    path: 'modelo', component: VenListModeloComponent
  },
  {
    path: 'credito', component: VenListCreditoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaRoutingModule { }
