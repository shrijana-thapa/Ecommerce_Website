import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';

import { Login } from './components/login';
import { RouterLink } from '@angular/router';
import { LoginRoutingModule } from './login.routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Login,
  ],
  imports: [

  LoginRoutingModule  ,RouterLink, MatFormFieldModule,
    MatInputModule,
    MatButtonModule,CommonModule,ReactiveFormsModule
  ],


})
export class LoginModule { }
