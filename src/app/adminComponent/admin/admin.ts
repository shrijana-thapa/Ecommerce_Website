
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cartService';


@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.html',
  styleUrls: ['./admin.scss']
})

export class Admin implements OnInit{
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
        // Subscribe to the observable for live updates
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  updateQuantity(item: any) {
    if (item.quantity < 1) {
      item.quantity = 1;
    }
    this.cartService.updateCartItem(item);
    alert(`${item.name} quantity updated to ${item.quantity}`);
  }

  removeCart(Name: string) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.cartService.removeFromCart(Name);
    
    }
  }
}






