import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { MantProveedorListComponent } from './proveedor/component/proveedor/mant-proveedor-list/mant-proveedor-list.component';
import { MantProveedorRegisterComponent } from './proveedor/component/proveedor/mant-proveedor-register/mant-proveedor-register.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MantUnidadListComponent } from './Unidad/component/mant-unidad-list/mant-unidad-list.component';
import { MantUnidadRegisteComponent } from './Unidad/component/mant-unidad-registe/mant-unidad-registe.component'



@NgModule({
  declarations: [
    MantProveedorListComponent,
    MantUnidadListComponent,
    MantUnidadRegisteComponent,
    MantProveedorRegisterComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class MantenimientoModule { }
