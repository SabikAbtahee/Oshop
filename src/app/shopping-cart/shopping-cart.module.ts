import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartDefaultComponent } from './shopping-cart-default/shopping-cart-default.component';
import { RouterModule, Route, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AuthguardService } from '../core/security-service/authguard.service';
import { shoppingcartRoutes } from '../config/routes/lazyloadedRoutes.routes';




@NgModule({
  declarations: [ShoppingCartDefaultComponent, CheckoutComponent, OrderSuccessComponent, MyOrdersComponent],
  imports: [
    RouterModule.forChild(shoppingcartRoutes),
    CommonModule
  ]
})
export class ShoppingCartModule { }
