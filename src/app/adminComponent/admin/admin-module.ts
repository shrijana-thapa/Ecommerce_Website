import { DashboardModule } from "../../Dashboard/dashboard.module";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing-module";
import { Admin } from "./admin";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [Admin],
  
  imports: [
    CommonModule,
    AdminRoutingModule,
   DashboardModule,FormsModule
  ],
  exports:[Admin]

})
export class AdminModule { }
