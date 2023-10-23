import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import {PaginationModule} from 'ngx-bootstrap/pagination'
import {NgxPaginationModule} from 'ngx-pagination'
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { MantProveedorListComponent } from './proveedor/component/proveedor/mant-proveedor-list/mant-proveedor-list.component';
import { MantProveedorRegisterComponent } from './proveedor/component/proveedor/mant-proveedor-register/mant-proveedor-register.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MantUnidadListComponent } from './Unidad/component/mant-unidad-list/mant-unidad-list.component';
import { MantUnidadRegisteComponent } from './Unidad/component/mant-unidad-registe/mant-unidad-registe.component';
import { MantListMaterialComponent } from './Material/component/mant-list-material/mant-list-material.component';
import { MantMaterialRegistroComponent } from './Material/component/mant-material-registro/mant-material-registro.component'



@NgModule({
  declarations: [
    MantProveedorListComponent,
    MantUnidadListComponent,
    MantUnidadRegisteComponent,
    MantProveedorRegisterComponent,
    MantListMaterialComponent,
    MantMaterialRegistroComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ModalModule,
    PaginationModule,
    NgxPaginationModule
  ]
})
export class MantenimientoModule { }
