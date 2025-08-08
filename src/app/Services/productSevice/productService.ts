import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface product{
  id:number,
  name:string,
  price:number,
  description:string,
  imageUrl?:string
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   private productsUrl="/products.json";
   constructor(private http :HttpClient){}

  getProducts(): Observable<product[]>{
return this.http.get<product[]>(this.productsUrl);

  }


}
