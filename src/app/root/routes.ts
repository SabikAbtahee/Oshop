import { Routes } from '@angular/router';
import { AnonymousComponent } from './anonymous/anonymous.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AngularFireAuthGuard, loggedIn, canActivate } from '@angular/fire/auth-guard';
import { AuthguardService } from '../core/security-service/authguard.service';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'authentication',
		pathMatch: 'full'
	},
	{
		path: '',
		component: NavbarComponent,
		children: [
			{
				path: 'shopping-cart',
				loadChildren: '../shopping-cart/shopping-cart.module#ShoppingCartModule',
				canActivate: [ AuthguardService ]
			},
			{
				path: 'profile',
				loadChildren: '../profile/profile.module#ProfileModule',
				canActivate: [ AuthguardService ]
			},
			{
				path: 'product',
				loadChildren: '../product/product.module#ProductModule',
				canActivate: [ AuthguardService ]
			},
			{
				path: 'enquiry',
				loadChildren: '../enquiry/enquiry.module#EnquiryModule',
				canActivate: [ AuthguardService ]
			},
			{
				path: 'admin',
				loadChildren: '../admin/admin.module#AdminModule',
				canActivate:[AuthguardService]

			},
			{
				path: 'category',
				loadChildren: '../category/category.module#CategoryModule',
				canActivate:[AuthguardService]

			},
			{
				path: 'purchase',
				loadChildren: '../purchase/purchase.module#PurchaseModule',
				canActivate:[AuthguardService]

			}
		]
	},
	{
		path: '',
		component: AnonymousComponent,
		children: [
			{
				path: 'authentication',
				loadChildren: '../authentication/authentication.module#AuthenticationModule'
			}
		]
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];
