import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Services/productSevice/productService';

@Pipe({
  name: 'productFilter',
  standalone: false
})
export class ProductFilterPipe implements PipeTransform {

  transform(products:Product[],searchText:string): Product[]{

  if(!products || !searchText){
    return products;
  }
  searchText=searchText.toLowerCase();
  return products.filter(product=>
     product.name.toLowerCase().includes(searchText) || 
    product.description.toLowerCase().includes(searchText));

  }

}
