import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantProveedorListComponent } from './component/proveedor/mant-proveedor-list/mant-proveedor-list.component';

const routes: Routes = [
  {
    path: 'proveedor',component:MantProveedorListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
