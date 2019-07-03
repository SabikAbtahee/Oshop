import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartDefaultComponent } from './shopping-cart-default/shopping-cart-default.component';
import { RouterModule, Route, Routes } from '@angular/router';


const routes:Routes=[
  {
    path:'',
    component:ShoppingCartDefaultComponent
  }
]

@NgModule({
  declarations: [ShoppingCartDefaultComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ShoppingCartModule { }
