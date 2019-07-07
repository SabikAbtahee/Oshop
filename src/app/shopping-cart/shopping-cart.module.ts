import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartDefaultComponent } from './shopping-cart-default/shopping-cart-default.component';
import { RouterModule, Route, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';


const routes:Routes=[
  {
    path:'',
    component:ShoppingCartDefaultComponent
  }
]

@NgModule({
  declarations: [ShoppingCartDefaultComponent, CheckoutComponent, OrderSuccessComponent, MyOrdersComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ShoppingCartModule { }
