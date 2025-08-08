import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../../Services/form/formService';
import { ProductService } from '../../Services/productSevice/productService';
import { product } from '../../Services/productSevice/productService';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit{
  products$!:Observable<product[]>;
    constructor(private router: Router ,private formService:FormService,private productService:ProductService) {}

ngOnInit(){
this.products$=this.productService.getProducts();
}


logout():void{
this.formService.logout();
this.router.navigate(['/login']);
}
}
