import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

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

     // BehaviorSubject to store products and for instant updates
    private productsSubject = new BehaviorSubject<Product[]>(this.getLocalProduct());
    products$ = this.productsSubject.asObservable();

  constructor(private http :HttpClient){}

   getLocalProduct():Product[]{

   const parsed= (localStorage.getItem(this.localStorageKey));
  return  parsed ? JSON.parse(parsed) : [] ;
   }
  getProducts(): Observable<Product[]>{
    
    return this.products$;
  }
  deleteProductFromLocalStorage(id:number){
      const products =this.getLocalProduct();
const updatedProduct= products.filter(item=>{  
    return item.id !== id
  });
  localStorage.setItem( this.localStorageKey ,JSON.stringify(updatedProduct));
   this.productsSubject.next(updatedProduct);


}
  updateLocalStorageProduct(product:Product){
    const localValue=this.getLocalProduct();
    const index=localValue.findIndex(item=>{
      return item.id==product.id
    })
    if(index !== -1){
      localValue[index]=product;
      localStorage.setItem(this.localStorageKey,JSON.stringify(localValue));
       this.productsSubject.next(localValue); 

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
          this.productsSubject.next(products);
        })
      );
}

}
