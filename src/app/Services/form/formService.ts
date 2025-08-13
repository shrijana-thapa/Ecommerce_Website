import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../productSevice/productService';

@Injectable({
  providedIn: 'root'
})
export class FormService {
private readonly userKey='user';
  private readonly cartKey = 'cartItems';

constructor(private router:Router){}
//save to localstorage
saveUserData(userDetails:any):void{
     localStorage.setItem(this.userKey, JSON.stringify(userDetails));
}
//get from localstorage
getUserData(){
   const userData=localStorage.getItem(this.userKey);
   return userData ? JSON.parse(userData): null;
   
}




logout(){
  this.router.navigate(['/login']);
}
  
}
