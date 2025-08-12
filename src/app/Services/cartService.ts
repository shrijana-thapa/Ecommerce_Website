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
    // for delete cart items 
     private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

     constructor(private formService: FormService) {
    //Load cart from localStorage when service starts
    const savedCart = this.formService.getCartData();
    if (savedCart) {
      if (Array.isArray(savedCart)) {
        this.cartItems = savedCart;
      } else if (typeof savedCart === 'object') {
        this.cartItems = Object.values(savedCart);
      } else {
        this.cartItems = [];
      }
        this.cartItemsSubject.next(this.cartItems);
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
    this.formService.saveCartData(this.cartItems);
    //notify subscribers
     this.cartItemsSubject.next(this.cartItems); 
    this.cartCount.next(this.cartItems.length);
  }

 

}



