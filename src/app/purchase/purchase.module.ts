import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseDefaultComponent } from './components/purchase-default/purchase-default.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {
    path:'',
    component:PurchaseDefaultComponent
  }
]
@NgModule({
  declarations: [PurchaseDefaultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PurchaseModule { }
