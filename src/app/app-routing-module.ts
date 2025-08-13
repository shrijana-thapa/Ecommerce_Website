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

    { path: 'cartItems', loadChildren: () => import('./cartItems.component/cart-items/cart-items-module').then(m => m.CartItemsModule)},

     { path: 'admin', loadChildren: () => import('./adminComponent/admin/admin-module').then(m => m.AdminModule)},
         { path: 'update', loadChildren: () => import('./updateComponent/update/update-module').then(m => m.UpdateModule)},

 //wild Card routing
   { path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
