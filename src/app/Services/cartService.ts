import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormService } from './form/formService';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems:any[]=[];
  private cartCount= new BehaviorSubject <number> (0);
   cartCount$=this.cartCount.asObservable();

     constructor(private formService: FormService) {
    //Load cart from localStorage when service starts
    const savedCart = this.formService.getUserData();
    if (savedCart) {
      this.cartItems = savedCart;
      this.cartCount.next(this.cartItems.length);
    }
  }
 
  
  // Add to cart
  addToCart(product: any) {
    this.cartItems.push(product);
    this.updateStorage();
  }

  //  Get cart items
  getCartItems() {
    return this.cartItems;
  }

  // Remove item from cart
  removeFromCart(productName: string) {
    this.cartItems = this.cartItems.filter(item => item.name !== productName);
    this.updateStorage();
  }

  //  Clear cart
  clearCart() {
    this.cartItems = [];
    this.updateStorage();
  }

  // Sync with localStorage & update count
  private updateStorage() {
    this.formService.saveUserData(this.cartItems);
    this.cartCount.next(this.cartItems.length);
  }

}
