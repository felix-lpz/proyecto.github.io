import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplaraComponent } from './component/templara/templara.component';

const routes: Routes = [
  {
    path: '',component: TemplaraComponent,
    children:[
      {
        path: 'mantenimiento', loadChildren: ()=> import("./../mantenimiento/mantenimiento.module").
        then(x => x.MantenimientoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
