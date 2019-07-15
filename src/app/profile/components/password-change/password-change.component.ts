import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserInformation } from '../../../config/interfaces/user.interface';
import { ProfileService } from '../../services/profile.service';
import { first } from 'rxjs/operators';
import { passwordRegex } from '../../../config/constants/defaultConstants';
import { ErrorStateMatcherForsignUppage } from '../../../core/utility-service/utility.service';
import { errorMessages } from '../../../config/validators/errormessages.constants';

@Component({
	selector: 'app-password-change',
	templateUrl: './password-change.component.html',
	styleUrls: [ './password-change.component.scss' ]
})
export class PasswordChangeComponent implements OnInit {
	changePasswordForm: FormGroup;
	passwordgroup: any = {};
	matcher;
	errormessages = errorMessages;
	constructor(private fb: FormBuilder, private profileservice: ProfileService) {}

	ngOnInit() {
		this.makePasswordChangeForm();
		this.setCustomValidation();
	}

	makePasswordChangeForm() {
		this.changePasswordForm = this.fb.group({
			oldpassword: [ '', [ Validators.required, Validators.pattern(passwordRegex) ] ],
			newpassword: [ '', [ Validators.required, Validators.pattern(passwordRegex) ] ],
			confirmpassword: [ '', [ Validators.required, Validators.pattern(passwordRegex) ] ]
		});
	}

	onSubmit() {
		if (this.changePasswordForm.valid) {
			this.setPassword();
			this.getCredentialWithEmail(this.passwordgroup);
		}
	}

	setPassword() {
		this.passwordgroup.oldpassword = this.changePasswordForm.value.oldpassword;
		this.passwordgroup.newpassword = this.changePasswordForm.value.newpassword;
		this.passwordgroup.confirmpassword = this.changePasswordForm.value.confirmpassword;
	}

	passwordMatchValidator(group: FormGroup): any {
		if (group) {
			if (group.get('newpassword').value !== group.get('confirmpassword').value) {
				return { notMatching: true };
			}
		}

		return null;
	}
	setCustomValidation() {
		this.changePasswordForm.setValidators(this.passwordMatchValidator);
		this.changePasswordForm.updateValueAndValidity();
		this.matcher = new ErrorStateMatcherForsignUppage();
		this.x();
	}

	x() {
		this.changePasswordForm.valueChanges.subscribe((res) => {
			console.log(res);
			console.log(this.changePasswordForm);
		});
	}

	getCredentialWithEmail(passwords) {
		this.profileservice
			.updatePassword(passwords.oldpassword, passwords.confirmpassword)
			.pipe(first())
			.subscribe((res) => {
				console.log(res);
			});
	}
}
