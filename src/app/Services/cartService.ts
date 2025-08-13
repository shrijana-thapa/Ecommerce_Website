import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './productSevice/productService';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems:Product[]=[];
  private cartKey='cartkey';
  // BehaviorSubject to store added  cartItems and for instant updates
    private cartItemsSubject = new BehaviorSubject<Product[]>(this.getLocalCartItems());
    cartItems$ = this.cartItemsSubject.asObservable();

  private cartCount= new BehaviorSubject <number> (0);
   cartCount$=this.cartCount.asObservable();


     constructor() {
    //Load cart from localStorage when service starts
    const savedCart = this.getLocalCartItems();
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
  addToCart(product: Product) {
   this.cartItems.push(product);
    this.saveCartDataToLocalStorage(this.cartItems);
     this.cartItemsSubject.next(this.cartItems);  // emit new value to all subscriber
     this.cartCount.next(this.cartItems.length);
  }

  // save Cart data into localstorage
  saveCartDataToLocalStorage(cartItems: Product[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
  }
  
  getLocalCartItems():Product[]{

   const parsed= (localStorage.getItem(this.cartKey));
  return  parsed ? JSON.parse(parsed) : [] ;
   }

  //  Get cart items
  getCartItems():Observable<Product[]> {
    return this.cartItems$
  }

  // Remove item from cart
  removeCartItemsFromLocalStorage(id: number) {

  this.cartItems = this.cartItems.filter(item => item.id !== id);  // update internal array
  this.saveCartDataToLocalStorage(this.cartItems);  // save updated cart to localStorage
  this.cartItemsSubject.next(this.cartItems);  // notify subscribers
  this.cartCount.next(this.cartItems.length);  // update count
}




 

}



