import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserInformation, CustomerUserInformation } from '../../../config/interfaces/user.interface';
import { first } from 'rxjs/operators';
import { Roles, RolesView } from '../../../config/enums/default.enum';
import { Router } from '@angular/router';
import { defaultConst, urlPaths } from '../../../config/constants/defaultConstants';
@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: [ './sign-up.component.scss' ]
})
export class SignUpComponent implements OnInit {
	signupform: FormGroup;
	userInformation: UserInformation;
	roles = RolesView;
	defaultCountryOfPhoneNumber = defaultConst.defaultPhonenumberCode;
	constructor(private authenticationService: AuthenticationService, private fb: FormBuilder,private router:Router) {}

	ngOnInit() {
		this.makeSignUpForm();
		// this.authenticationService.signOut();
	}

	makeSignUpForm() {
		this.signupform = this.fb.group({
			name: [ '' ],
			phoneNumber: [ '' ],
			email: [ '', Validators.required ],
			password: [ '', Validators.required ],
			role: [ '' ],
			homeAddress:[''],
			shopAddress:['']
		});
	}

	onSubmit() {
		this.userInformation = {
			email: this.signupform.value.email,
			password: this.signupform.value.password,
			displayName:this.signupform.value.name,
			metaData: {
				name: this.signupform.value.name,
				email: this.signupform.value.email,
				role: [ ...this.signupform.value.role, Roles.Anonymous ],
				phoneNumber: this.signupform.value.phoneNumber,
				homeAddress:this.signupform.value.homeAddress,
				shopAddress:this.signupform.value.shopAddress,
				enquiryLimit: defaultConst.defaultEnquiryLimit,
				ratings	:defaultConst.defaultRatings,
			}
		};
		this.registerUser(this.userInformation);
	}

	registerUser(user: UserInformation) {
		this.authenticationService.signUp(user).pipe(first()).subscribe((res) => {
			// console.log(res);
		});
	}

	routeToSignin(){
		this.router.navigate([urlPaths.Authentication.Signin.url]);
	}
}
