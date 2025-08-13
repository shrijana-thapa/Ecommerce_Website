import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Update } from './update';

const routes: Routes = [
  {
    path:':id',component:Update
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateRoutingModule { }
