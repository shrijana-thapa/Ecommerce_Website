import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../../Services/form/formService';
import { Product, ProductService } from '../../Services/productSevice/productService';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartService } from '../../Services/cartService';
import {  NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.html',
  styleUrls: ['./admin.scss']
})
export class Admin implements OnInit{
 searchText: string = '';
 cartItems:any;
cartCounts:number=0;
products:any;

  products$!:Observable<Product[]>;
    constructor(private router: Router ,private formService:FormService,private productService:ProductService,private cartService:CartService) {

     
    }

 

ngOnInit() {

  this.products$ = this.productService.getProducts();
     
}


deleteProduct(product: Product) {
  debugger;
  this.productService.deleteProductFromLocalStorage(product.id);
}

navigateToupdate(product: Product){
  this.router.navigate(['update',product.id]);

}



logout():void{
this.formService.logout();
this.router.navigate(['/login']);
}
}