import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './page/welcome/welcome.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  //* Ruteo Simple
  {
    path: '',component:WelcomeComponent
  },
  {
    path: '404',component: NotFoundComponent
  },
  //* Vamo a utilizar a lazy loading
  {
    path: 'auth', loadChildren:()=> import("./modules/auth/auth.module").
    then(x => x.AuthModule)
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren:() => import("./modules/template/template.module").
    then(x => x.TemplateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
