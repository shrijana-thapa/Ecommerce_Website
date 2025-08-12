import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../../Services/form/formService';
import { Product, ProductService } from '../../Services/productSevice/productService';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartService } from '../../Services/cartService';
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.html',
  styleUrl: './admin.scss'
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

  this.loadProduct();
  
}
loadProduct(){
  this.products$ = this.productService.getProducts();
}

deleteProduct(product_id: number) {
  this.productService.deleteProductFromLocalStorage(product_id);
  this.loadProduct();
}

updateProduct(product:Product){
  

}
logout():void{
this.formService.logout();
this.router.navigate(['/login']);
}
}