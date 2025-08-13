import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../Services/cartService';
import { Observable } from 'rxjs';
import { Product } from '../../../Services/productSevice/productService';


@Component({
  selector: 'app-cart-items',
  standalone: false,
  templateUrl: './cart-items.html',
  styleUrls: ['./cart-items.scss']
})
export class CartItems implements OnInit{
  
   cartItems:any;
   cartItems$!:Observable<Product[]>;

    constructor(private cartService:CartService){}

  ngOnInit(): void {
  
this.cartItems$=this.cartService.getCartItems();
  }
 

  removeCartItem(product_id:number){
this.cartService.removeCartItemsFromLocalStorage(product_id);

}
  }
   
  



   





