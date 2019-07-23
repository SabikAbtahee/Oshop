import { Routes } from '@angular/router';
import { SignInComponent } from 'src/app/authentication/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/authentication/components/sign-up/sign-up.component';
import { AccountRecoveryComponent } from 'src/app/authentication/components/account-recovery/account-recovery.component';
import { CategoryDefaultComponent } from 'src/app/category/components/category-default/category-default.component';
import { AdminDefaultComponent } from 'src/app/admin/components/admin-default/admin-default.component';
import { EnquiryDefaultComponent } from 'src/app/enquiry/components/enquiry-default/enquiry-default.component';
import { ProductDefaultComponent } from 'src/app/product/components/product-default/product-default.component';
import { ProfileDefaultComponent } from 'src/app/profile/components/profile-default/profile-default.component';
import { PurchaseDefaultComponent } from 'src/app/purchase/components/purchase-default/purchase-default.component';
import { ShoppingCartDefaultComponent } from 'src/app/shopping-cart/shopping-cart-default/shopping-cart-default.component';
import { OrderSuccessComponent } from 'src/app/shopping-cart/order-success/order-success.component';

export const authenticationRoutes: Routes = [
	{
		path: '',
		redirectTo: 'sign-in'
	},
	{
		path: 'sign-in',
		component: SignInComponent
	},
	{
		path: 'sign-up',
		component: SignUpComponent
	},
	{
		path: 'account-recovery',
		component: AccountRecoveryComponent
	}
];

export const categoryRoutes: Routes = [
	{
		path: '',
		component: CategoryDefaultComponent
	}
];

export const adminRoutes: Routes = [
	{
		path: '',
		component: AdminDefaultComponent
	}
];

export const enquiryRoutes: Routes = [
	{
		path: '',
		component: EnquiryDefaultComponent
	}
];
export const productRoutes: Routes = [
	{
		path: '',
		component: ProductDefaultComponent
	}
];

export const profileRoutes: Routes = [
	{
		path: '',
		component: ProfileDefaultComponent
	}
];

export const purchaseRoutes:Routes=[
  {
    path:'',
    component:PurchaseDefaultComponent
  }
];

export const shoppingcartRoutes:Routes=[
  {
    path:'',
    component:ShoppingCartDefaultComponent
  },
  {
    path:'order',
    component:OrderSuccessComponent,

  }
]
