import { FormControl } from '@angular/forms';
import { signinErrorCode } from '../constants/defaultConstants';

export class ValidationErrorMessages {
	emailMessage(control) {
		return control.hasError('required')
			? 'You must enter an Email address'
			: control.hasError('email') ? 'Invalid email address' : null;
	}

	authMessageForEmail(control) {
		return control.hasError('required')
			? 'You must enter an Email address'
			: control.hasError('email')
				? 'Invalid email address'
				: control.hasError(signinErrorCode['User not found'].code)
					? signinErrorCode['User not found'].message
					: control.hasError(signinErrorCode['Invalid Email'].code)
						? signinErrorCode['Invalid Email'].message
						: control.hasError(signinErrorCode['User Disabled'].code)
							? signinErrorCode['User Disabled'].message
							: null;
	}
	authMessageForPassword(control) {
		return control.hasError('required')
			? 'Enter password'
			: control.hasError(signinErrorCode['Wrong password'].code)
				? signinErrorCode['Wrong password'].message
				: null;
	}
}
