import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserInformation, CustomerUserInformation } from '../../../config/interfaces/user.interface';
import { first } from 'rxjs/operators';
import { Roles } from '../../../config/enums/default.enum';
@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: [ './sign-up.component.scss' ]
})
export class SignUpComponent implements OnInit {
	signupform: FormGroup;
	userInformation: UserInformation;
	roles = Roles;
	constructor(private authenticationService: AuthenticationService, private fb: FormBuilder) {}

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
			role: [ '' ]
		});
	}

	onSubmit() {
		this.userInformation = {
			email: this.signupform.value.email,
			password: this.signupform.value.password,
			metaData: {
				name: this.signupform.value.name,
				email: this.signupform.value.email,
				role: [ ...this.signupform.value.role, Roles.Anonymous ],
				phoneNumber: this.signupform.value.phoneNumber
			}
		};
		this.registerUser(this.userInformation);
	}

	registerUser(user: UserInformation) {
		this.authenticationService.signUp(user).pipe(first()).subscribe((res) => {
			console.log(res);
		});
	}
	
}
