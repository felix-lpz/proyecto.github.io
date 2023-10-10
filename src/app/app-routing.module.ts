import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './page/welcome/welcome.component';
import { NotFoundComponent } from './page/not-found/not-found.component';

const routes: Routes = [
  //* Ruteo Simple
  {
    path: '',component:WelcomeComponent
  },
  {
    path: '404',component: NotFoundComponent
  }
  //* Vamo a utilizar a lazy loading
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
