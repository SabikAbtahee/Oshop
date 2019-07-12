export const defaultConst = {
	sidebar: [
		{
			name: 'Shopping Cart',
			url: 'shopping-cart'
		},
		{
			name:'Product',
			url:'product'
		},
		{
			name:'Enquiry',
			url:'enquiry'
		},
		
	],
	menu: {
		profile:{
			name:'Profile',
			url:'profile'
		},
		logout:{
			name:'Logout',
			url:'sign-in'
		}
	},
	siteName:{
		name:'Windmart',
		url:'https://oshop-e9657.firebaseapp.com/'
	},
	defaultEnquiryLimit:5,
	defaultRatings:50,
	defaultPhonenumberCode:'bd'
};


export const signinErrorCode={
	'Invalid Email':{
		code:'auth/invalid-email',
		message:'Enter valid email address'
	},
	'User Disabled':{
		code:'auth/user-disabled',
		message:'Account with the corresponding email is disabled'
	},
	'User not found':{
		code:'auth/user-not-found',
		message:'No such user found with the corresponding email'
	},
	'Wrong password':{
		code:'auth/wrong-password',
		message:'Password does not match'
	}

}

// This can vary if routes are changed in module so maintain consistency
export const urlPaths={
	'Authentication':{
		'Signin':{
			url:'authentication/sign-in'
		},
		'Signup':{
			url:'authentication/sign-up'
		},
		'AccountRecovery':{
			url:'authentication/account-recovery'
		}
	},
	'Product':{
		'ProductList':{
			url:'product'
		}
	}
}