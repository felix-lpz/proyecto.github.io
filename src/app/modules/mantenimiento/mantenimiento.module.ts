import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { MantProveedorListComponent } from './component/proveedor/mant-proveedor-list/mant-proveedor-list.component';
import { MantProveedorRegisterComponent } from './component/proveedor/mant-proveedor-register/mant-proveedor-register.component';



@NgModule({
  declarations: [
    MantProveedorListComponent,
    MantProveedorRegisterComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
  ]
})
export class MantenimientoModule { }
