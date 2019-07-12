import { Injectable } from '@angular/core';
// import { _foreach as foreach} from 'lodash'
import * as _ from 'lodash';
import { FormGroup } from '@angular/forms';
@Injectable({
	providedIn: 'root'
})
export class UtilityService {
	constructor() {}
	getFormControlsValueFromFormGroup(fg: FormGroup) {
		let controls = [];
		_.forEach(Object.keys(fg.controls), function(value: string, key: string) {
			controls = [ ...controls, value ];
		});
		return controls;
	}
}
