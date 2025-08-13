import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface Product{
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
     private localStorageKey = 'my_products';

   constructor(private http :HttpClient){}

   getLocalProduct():Product[]{

   const parsed= (localStorage.getItem(this.localStorageKey));
  return  parsed ? JSON.parse(parsed) : [] ;
   }
  getProducts(): Observable<Product[]>{
    return of(this.getLocalProduct());
  }
  deleteProductFromLocalStorage(id:number){
      const products =this.getLocalProduct();
const updatedProduct= products.filter(item=>{  
    return item.id !== id
  });
  localStorage.setItem( this.localStorageKey ,JSON.stringify(updatedProduct));

}
  updateLocalStorageProduct(product:Product){
    const localVlaue=this.getLocalProduct();
    const index=localVlaue.findIndex(item=>{
      return item.id==product.id
    })
    if(index !== -1){
      localVlaue[index]=product;
      localStorage.setItem(this.localStorageKey,JSON.stringify(localVlaue));
    }
  }

  getProductById(id: number) {
  const products = this.getLocalProduct();
  return products.find((p: any) => p.id === id);
}

  

uploadProductsDataToLocalStorage() {
return this.http.get<Product[]>(this.productsUrl).pipe(
        tap(products => {
          localStorage.setItem(this.localStorageKey, JSON.stringify(products));
        })
      );
}

}
