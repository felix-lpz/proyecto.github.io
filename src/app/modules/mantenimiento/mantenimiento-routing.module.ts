import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantProveedorListComponent } from './proveedor/component/proveedor/mant-proveedor-list/mant-proveedor-list.component';
import { MantUnidadListComponent } from './Unidad/component/mant-unidad-list/mant-unidad-list.component';

const routes: Routes = [
  {
    path: 'proveedor',component:MantProveedorListComponent
  },
  {
    path: 'unidad',component:MantUnidadListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
