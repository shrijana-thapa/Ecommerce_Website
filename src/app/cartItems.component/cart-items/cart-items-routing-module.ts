import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartItems } from '../component/cart-items/cart-items';

const routes: Routes = [{
  path:'', component:CartItems
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartItemsRoutingModule { }
