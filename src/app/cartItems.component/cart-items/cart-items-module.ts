import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartItemsRoutingModule } from './cart-items-routing-module';
import { CartItems } from '../component/cart-items/cart-items';


@NgModule({
  declarations: [CartItems],
  imports: [
    CommonModule,
    CartItemsRoutingModule
  ]
})
export class CartItemsModule { }
