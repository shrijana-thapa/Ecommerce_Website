import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatError, MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';

import { UpdateRoutingModule } from './update-routing-module';
import { Update } from './update';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatInput } from '@angular/material/input';



@NgModule({
  declarations: [Update],
  imports: [
    CommonModule,
    UpdateRoutingModule,ReactiveFormsModule,MatIconModule,MatLabel,MatButtonModule,MatError,MatFormFieldModule, MatInput,
  ]
})
export class UpdateModule { }
