import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { FormService } from './Services/form/formService';

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
 const formService= inject(FormService);
 const userData=formService.getUserData();
 if(userData){
  return true;
 }
 else{
  alert("please login to continue");
  router.navigate(['/login']);
  return false;
 }
  
};
