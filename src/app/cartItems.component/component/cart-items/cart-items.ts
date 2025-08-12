import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../Services/cartService';


@Component({
  selector: 'app-cart-items',
  standalone: false,
  templateUrl: './cart-items.html',
  styleUrl: './cart-items.scss'
})
export class CartItems implements OnInit{
  
   cartItems:any;
    constructor(private cartService:CartService){
    
    }
  ngOnInit(): void {
  
  this.cartItems=this.cartService.getCartItems();
 
   
  
  
  }
  removeCart(Name:string){
this.cartService.removeFromCart(Name);
  // Update cart items
this.cartService.cartItems$.subscribe(item=>{
 this.cartItems= item
});
  }
   
  }



   





