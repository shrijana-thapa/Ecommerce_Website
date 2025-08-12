import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardRoutingModule } from './dashboard.routing.module';
import { Dashboard } from './component/dashboard';
import { RouterLink, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from '../pipes/product-filter-pipe';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { HttpClientModule } from '@angular/common/http';
import { AddToCartHighlight } from '../add-to-cart-highlight';





@NgModule({
  declarations: [
    Dashboard,
    ProductFilterPipe,
    AddToCartHighlight
  ],
  imports: [
    HttpClientModule,
    FormsModule,
     MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    CommonModule,
    DashboardRoutingModule,RouterModule,   
     MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
MatInputModule,
MatBadgeModule

  ]


})
export class DashboardModule { }
