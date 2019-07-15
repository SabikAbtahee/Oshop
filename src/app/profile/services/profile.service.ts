import { Injectable } from '@angular/core';
import { UserInformation } from '../../config/interfaces/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { errorMessages } from '../../config/validators/errormessages.constants';
@Injectable({
	providedIn: 'root'
})
export class ProfileService {
	constructor(private afauth: AngularFireAuth) {}

	updatePassword(oldpassword:string, newpassword: string): Observable<any> {
		return new Observable((observer) => {
			const currentEmail = this.afauth.auth.currentUser.email;
			this.afauth.auth
				.signInWithEmailAndPassword(currentEmail, oldpassword)
				.then((res) => {
					if (res && res.user && res.user.emailVerified) {
            this.afauth.auth.currentUser.updatePassword(newpassword);
            observer.next(errorMessages.password_updated);
					} else {
            observer.next(errorMessages.verify_email);
					}
				})
				.catch((err) => {
          observer.next(err && err.code);
        });
		});
  }
  
  
}
