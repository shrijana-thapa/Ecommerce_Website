import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../Services/cartService';
import { FormService } from '../../../Services/form/formService';


@Component({
  selector: 'app-cart-items',
  standalone: false,
  templateUrl: './cart-items.html',
  styleUrl: './cart-items.scss'
})
export class CartItems implements OnInit{
  
   cartItems:any;
   cartItemsArray:any;
    constructor(private cartService:CartService,private formService:FormService){
    
    }
  ngOnInit(): void {
  
  this.cartItems=this.cartService.getCartItems();
 
   
  
  
  }
  removeCart(Name:string){
this.cartService.removeFromCart(Name);
  // Update the local array immediately so the UI updates
  this.cartItems = this.cartItems.filter((item: any) => item.name !== Name);
  }
   
  }



   





