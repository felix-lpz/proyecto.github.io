import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentaRoutingModule } from './venta-routing.module';
import { VenListClienteComponent } from './cliente/component/ven-list-cliente/ven-list-cliente.component';
import { VenRegistroClienteComponent } from './cliente/component/ven-registro-cliente/ven-registro-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VenListClienteComponent,
    VenRegistroClienteComponent
  ],
  imports: [
    CommonModule,
    VentaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VentaModule { }
