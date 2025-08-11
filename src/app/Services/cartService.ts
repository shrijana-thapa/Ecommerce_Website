import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems:any[]=[];
  private cartCount= new BehaviorSubject <number> (0);
   cartCount$=this.cartCount.asObservable();

  //Add To Cart
addToCart(product:any){
  this.cartItems.push(product);
  this.cartCount.next(this.cartItems.length);
}
getCartItems(){
  return this.cartItems;
}

}
