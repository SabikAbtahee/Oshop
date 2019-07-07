import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'authentication',
		pathMatch: 'full'
	},
	{
		path: 'authentication',
		loadChildren: '../authentication/authentication.module#AuthenticationModule'
	},
	{
		path: 'shopping-cart',
		loadChildren: '../shopping-cart/shopping-cart.module#ShoppingCartModule'
	}
];
