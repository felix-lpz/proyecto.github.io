import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentaRoutingModule } from './venta-routing.module';
import { VenListClienteComponent } from './cliente/component/ven-list-cliente/ven-list-cliente.component';
import { VenRegistroClienteComponent } from './cliente/component/ven-registro-cliente/ven-registro-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VenListProductoComponent } from './producto/componente/ven-list-producto/ven-list-producto.component';
import { VenRegProductoComponent } from './producto/componente/ven-reg-producto/ven-reg-producto.component';
import { VenListTrasporteComponent } from './trasporte/componente/ven-list-trasporte/ven-list-trasporte.component';
import { VenRegTrasporteComponent } from './trasporte/componente/ven-reg-trasporte/ven-reg-trasporte.component';
import { VenListOrdenComponent } from './orden/componente/ven-list-orden/ven-list-orden.component';
import { VenListModeloComponent } from './modelo/componente/ven-list-modelo/ven-list-modelo.component';
import { VenRegOrdenComponent } from './orden/componente/ven-reg-orden/ven-reg-orden.component';
import { VenRegModeloComponent } from './modelo/componente/ven-reg-modelo/ven-reg-modelo.component';
import { VenListCreditoComponent } from './credito/componente/ven-list-credito/ven-list-credito.component';
import { VenRegCreditoComponent } from './credito/componente/ven-reg-credito/ven-reg-credito.component';


@NgModule({
  declarations: [
    VenListClienteComponent,
    VenRegistroClienteComponent,
    VenListProductoComponent,
    VenRegProductoComponent,
    VenListTrasporteComponent,
    VenRegTrasporteComponent,
    VenListOrdenComponent,
    VenListModeloComponent,
    VenRegOrdenComponent,
    VenRegModeloComponent,
    VenListCreditoComponent,
    VenRegCreditoComponent
  ],
  imports: [
    CommonModule,
    VentaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VentaModule { }
