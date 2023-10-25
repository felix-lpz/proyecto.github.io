import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProduccionRoutingModule } from './produccion-routing.module';
import { ProdListAreaComponent } from './area/componente/prod-list-area/prod-list-area.component';
import { ProdRegistroAreaComponent } from './area/componente/prod-registro-area/prod-registro-area.component';


@NgModule({
  declarations: [
    ProdListAreaComponent,
    ProdRegistroAreaComponent
  ],
  imports: [
    CommonModule,
    ProduccionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProduccionModule { }
