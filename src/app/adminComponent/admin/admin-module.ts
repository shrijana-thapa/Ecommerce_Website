import { DashboardModule } from "../../Dashboard/dashboard.module";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing-module";
import { Admin } from "./admin";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductFilterPipe } from "../../pipes/product-filter-pipe";



@NgModule({
  declarations: [Admin],
  
  imports: [
    CommonModule,
    AdminRoutingModule,
   DashboardModule,FormsModule,
      MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,MatToolbarModule,MatBadgeModule,  MatGridListModule,DashboardModule

  ],
  exports:[Admin]
})
export class AdminModule { }
