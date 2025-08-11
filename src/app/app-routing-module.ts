import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './Dashboard/component/dashboard';
import { authGuard } from './auth-guard';

const routes: Routes = [
  //Default route
   { path: '', redirectTo: 'login', pathMatch: 'full' },

  
  {
   path:'login',
   loadChildren:()=>import("./Login/login.module").then((m)=>m.LoginModule)
  },
  {
  path:'dashboard',
  loadChildren: ()=> import("./Dashboard/dashboard.module").then((m)=>m.DashboardModule),canActivate:[authGuard]

 },
 {
    path:'signup',
  loadChildren: ()=> import("./signup/signup-module").then((m)=>m.SignupModule)
 },
  { path: 'admin', loadChildren: () => import('./admin.component/admin/admin-module').then(m => m.AdminModule)},


 //wild Card routing
   { path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
