import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from './Services/productSevice/productService';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ecommerce');
  constructor(private productService:ProductService){
  
    this.productService.uploadProductsDataToLocalStorage().subscribe();

 
}


}