import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup-routing-module';
import { Signup } from './signup';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    Signup
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
        MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,ReactiveFormsModule

  ]
})
export class SignupModule { }
