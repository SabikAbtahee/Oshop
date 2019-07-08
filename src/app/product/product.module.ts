import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDefaultComponent } from './components/product-default/product-default.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
    path:'',
    component:ProductDefaultComponent
  }
]
@NgModule({
  declarations: [ProductDefaultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
