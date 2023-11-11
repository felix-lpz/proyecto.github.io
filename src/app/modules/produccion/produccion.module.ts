import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProduccionRoutingModule } from './produccion-routing.module';
import { ProdListAreaComponent } from './area/componente/prod-list-area/prod-list-area.component';
import { ProdRegistroAreaComponent } from './area/componente/prod-registro-area/prod-registro-area.component';
import { ProdListEmpComponent } from './empleado/componente/prod-list-emp/prod-list-emp.component';
import { ProdRegEmpComponent } from './empleado/componente/prod-reg-emp/prod-reg-emp.component';


@NgModule({
  declarations: [
    ProdListAreaComponent,
    ProdRegistroAreaComponent,
    ProdListEmpComponent,
    ProdRegEmpComponent
  ],
  imports: [
    CommonModule,
    ProduccionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProduccionModule { }
