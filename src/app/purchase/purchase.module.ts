import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseDefaultComponent } from './components/purchase-default/purchase-default.component';
import { RouterModule, Routes } from '@angular/router';
import { purchaseRoutes } from '../config/routes/lazyloadedRoutes.routes';



@NgModule({
  declarations: [PurchaseDefaultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(purchaseRoutes)
  ]
})
export class PurchaseModule { }
