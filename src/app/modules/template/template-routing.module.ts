import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplaraComponent } from './component/templara/templara.component';

const routes: Routes = [
  {
    path: '',component: TemplaraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
