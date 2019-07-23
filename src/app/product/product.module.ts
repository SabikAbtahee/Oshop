import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDefaultComponent } from './components/product-default/product-default.component';
import { RouterModule, Routes } from '@angular/router';
import { productRoutes } from '../config/routes/lazyloadedRoutes.routes';


@NgModule({
  declarations: [ProductDefaultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes)
  ]
})
export class ProductModule { }
