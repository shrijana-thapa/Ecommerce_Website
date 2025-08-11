import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cartService';

@Component({
  selector: 'app-admin.component',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit{
 cartItems:any;
    constructor(private cartService:CartService){}
  ngOnInit(): void {
  this.cartItems=this.cartService.getCartItems();
  }


}
