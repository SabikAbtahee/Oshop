import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './root-default/root-default.component';
import { routes } from './routes';

// const routes: Routes = [
  
//   {
//     path:'',
//     redirectTo:'authentication',
//     pathMatch:'full'
//   },

//   {
//     path:'shopping-cart',
//     loadChildren:'../shopping-cart/shopping-cart.module#ShoppingCartModule'
//   },
//   {
//     path:'authentication',
//     loadChildren:'../authentication/authentication.module#AuthenticationModule'
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
