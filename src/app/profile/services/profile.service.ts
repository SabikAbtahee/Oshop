import { Injectable } from '@angular/core';
import { UserInformation } from '../../config/interfaces/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { errorMessages } from '../../config/validators/errormessages.constants';
import { QueryDatabaseService } from '../../core/database-service/query-database.service';
import { first, switchMap } from 'rxjs/operators';
import { defaultConst } from 'src/app/config/constants/defaultConstants';
import { Entities } from 'src/app/config/enums/default.enum';
import { ObserversModule } from '@angular/cdk/observers';
import { MutationDatabaseService } from 'src/app/core/database-service/mutation-database.service';
@Injectable({
	providedIn: 'root'
})
export class ProfileService {
	constructor(private afauth: AngularFireAuth, private query: QueryDatabaseService,private mutate:MutationDatabaseService) {}

	updatePassword(oldpassword: string, newpassword: string): Observable<any> {
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

	getProfileInformation(): Observable<any> {
		return new Observable((observer) => {
			this.query
				.getLoggedInUserID()
				.pipe(
					switchMap((res) => {
						return this.query.getSingleData(Entities.Person, res);
					})
				)
				.pipe(first())
				.subscribe((res2) => {
					observer.next(res2);
				}),
				(err) => observer.error(err),
				() => observer.complete();
		});
	}

	updateProfileInformation(entity,id,data){
		this.mutate.updateSingleData(entity,id,data);
	}
}
