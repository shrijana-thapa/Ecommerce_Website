import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
private readonly userKey='user';
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
  localStorage.removeItem(this.userKey);
}
  
}
