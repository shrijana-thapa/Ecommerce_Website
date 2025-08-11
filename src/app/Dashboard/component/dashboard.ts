import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../../Services/form/formService';
import { ProductService } from '../../Services/productSevice/productService';
import { product } from '../../Services/productSevice/productService';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartService } from '../../Services/cartService';
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit{
 searchText: string = '';

cartCounts:number=0;

  products$!:Observable<product[]>;
    constructor(private router: Router ,private formService:FormService,private productService:ProductService,private cartService:CartService) {}

 

ngOnInit() {
  this.products$ = this.productService.getProducts().pipe(
    map(products => products || []) // <-- guarantees a non-null array
  );
    
   // Subscribe once here to cart count observable
  this.cartService.cartCount$.subscribe(count => {
    this.cartCounts = count;
  });

}

addProductToCart(product:any){
  this.cartService.addToCart(product);

  }
  


logout():void{
this.formService.logout();
this.router.navigate(['/login']);
}



}