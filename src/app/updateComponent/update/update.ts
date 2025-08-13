import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product, ProductService } from '../../Services/productSevice/productService';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-update',
  standalone: false,
  templateUrl: './update.html',
  styleUrl: './update.scss'
})
export class Update implements OnInit {
  productForm !: FormGroup;
  productId !:number;
  constructor(private fb:FormBuilder,private productService:ProductService,private route:ActivatedRoute,private router: Router){}  
 ngOnInit(): void {
   
 this.productForm=this.fb.group(
    {
      productName:['',[Validators.required]],
      productPrice:['',[Validators.required,Validators.min(0)]],
      image:['',[Validators.required]]
     });

     // Get product ID from route
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.productId);
    

      // Pre-fill form with existing data
    const product = this.productService.getProductById(this.productId);
    if (product) {
      this.productForm.patchValue({
        productName: product.name,
        productPrice: product.price,
        image: product.imageUrl
      });
    }

 }

   

  

 updateProduct(){
  if(this.productForm.valid){
    const productData:Product={ 
     id: this.productId,
      name: this.productForm.value.productName,
      price: this.productForm.value.productPrice,
      description: '', 
      imageUrl: this.productForm.value.image
    }
    this.productService.updateLocalStorageProduct(productData);

 }
  }


 
}

