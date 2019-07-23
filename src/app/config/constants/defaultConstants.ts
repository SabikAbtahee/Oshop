export const defaultConst = {
	sidebarforcustomersupplier:[
		{
			name: 'Product',
			url: 'product',
			icon:'weekend'
		},
		{
			name: 'Enquiry',
			url: 'enquiry',
			icon:'contact_support'
		},
		{
			name: 'Purchase',
			url: 'purchase',
			icon:'shopping_cart'
		},
	],
	sidebar: [
		{
			name: 'Admin Panel',
			url: 'admin',
			icon:'security'
		},
		{
			name: 'Product',
			url: 'product',
			icon:'weekend'
		},
		{
			name: 'Enquiry',
			url: 'enquiry',
			icon:'contact_support'
		},
		{
			name: 'Category',
			url: 'category',
			icon:'widgets'
		},
		{
			name: 'Purchase',
			url: 'purchase',
			icon:'shopping_cart'
		},
		// {
		// 	name: 'Shopping Cart',
		// 	url: 'shopping-cart',
		// 	icon:'shopping_cart'
		// },
	],
	menu: {
		profile: {
			name: 'My Profile',
			url: 'profile'
		},
		logout: {
			name: 'Logout',
			url: 'sign-in'
		}
	},
	siteName: {
		name: 'Windmart',
		url: 'https://oshop-e9657.firebaseapp.com/'
	},
	defaultEnquiryLimit: 5,
	defaultRatings: 50,
	defaultPhonenumberCode: 'bd',
	emailsent:'Email sent successfully',
	checkEmail:'Verification email sent'
};

export const signinErrorCode = {
	'Invalid Email': {
		code: 'auth/invalid-email',
		message: 'Enter valid email address'
	},
	'User Disabled': {
		code: 'auth/user-disabled',
		message: 'Account with the corresponding email is disabled'
	},
	'User not found': {
		code: 'auth/user-not-found',
		message: 'No such user found with the corresponding email'
	},
	'Wrong password': {
		code: 'auth/wrong-password',
		message: 'Password does not match'
	}
}

export const recoverAccountCode ={
	'Invalid Email':{
		code:'auth/invalid-email',
		message: 'Enter valid email address'
	},
	'User not found':{
		code:'auth/user-not-found',
		message: 'No such email is registered'
	}
}

export const signupErrorCodes = {
	'Email Already in use':{
		code:'auth/email-already-in-use',
		message:'This email is taken'
	},
	'Invalid Email':{
		code:'auth/invalid-email',
		message: 'Enter valid email address'
	},
	'Invalid Operation':{
		code:'auth/operation-not-allowed',
		message: 'Site do not have permission'
	},
	'Weak Password':{
		code:'auth/weak-password',
		message:'Password is too weak'
	}

}

// export const passwordRegex='/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm';
export const passwordRegex='^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$';

// This can vary if routes are changed in module so maintain consistency
export const urlPaths = {
	Authentication: {
		Signin: {
			url: 'authentication/sign-in'
		},
		Signup: {
			url: 'authentication/sign-up'
		},
		AccountRecovery: {
			url: 'authentication/account-recovery'
		}
	},
	Product: {
		ProductList: {
			url: 'product'
		}
	}
};

