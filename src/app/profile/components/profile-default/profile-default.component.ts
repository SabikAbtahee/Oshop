import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { takeUntil, first } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { CustomerUserInformation } from '../../../config/interfaces/user.interface';
import { RolesView, Entities } from 'src/app/config/enums/default.enum';
import { defaultConst } from 'src/app/config/constants/defaultConstants';
import { errorMessages } from 'src/app/config/validators/errormessages.constants';

@Component({
	selector: 'app-profile-default',
	templateUrl: './profile-default.component.html',
	styleUrls: [ './profile-default.component.scss' ]
})
export class ProfileDefaultComponent implements OnInit, OnDestroy {
	profileform: FormGroup;
	user: CustomerUserInformation;
	roles = RolesView;
	defaultCountryOfPhoneNumber = defaultConst.defaultPhonenumberCode;
	errormessages = errorMessages;
	_unsubscribeall: Subject<any>;

	constructor(private fb: FormBuilder, private profileService: ProfileService) {
		this._unsubscribeall = new Subject();
	}

	ngOnInit() {
		this.makeProfileForm();
		this.setProfileInformation().pipe(first()).subscribe((res) => {
			this.setProfileForm(res);
		});
	}

	makeProfileForm() {
		this.profileform = this.fb.group({
			name: [ '', Validators.required ],
			phoneNumber: [ '' ],
			role: [ '', Validators.required ],
			homeAddress: [ '' ],
			shopAddress: [ '' ]
		});
	}

	setProfileInformation(): Observable<any> {
		return new Observable((observer) => {
			this.profileService.getProfileInformation().pipe(first()).subscribe((res) => {
				this.user = res;
				observer.next(this.user);
			}),
				(err) => observer.error(err),
				() => observer.complete();
		});
	}

	setProfileForm(user) {
		this.profileform.controls.name.patchValue(user.name);
		this.profileform.controls.phoneNumber.patchValue(user.phoneNumber);
		this.profileform.controls.role.patchValue(user.role);
		this.profileform.controls.homeAddress.patchValue(user.homeAddress);
		this.profileform.controls.shopAddress.patchValue(user.shopAddress);
	}

	onSubmit() {
		if (this.profileform.valid) {
			this.user.name = this.profileform.value.name;
			this.user.role = [ ...this.profileform.value.role ];
			this.user.phoneNumber = this.profileform.value.phoneNumber;
			this.user.homeAddress = this.profileform.value.homeAddress;
			this.user.shopAddress = this.profileform.value.shopAddress;
			this.profileService.updateProfileInformation(Entities.Person, this.user.uid, this.user);
		} else {
			console.log('error');
		}
	}
	ngOnDestroy() {
		this._unsubscribeall.next();
		this._unsubscribeall.complete();
		this._unsubscribeall.unsubscribe();
	}
}
