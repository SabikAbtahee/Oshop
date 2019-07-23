import { Injectable } from '@angular/core';
import { CustomerUserInformation } from 'src/app/config/interfaces/user.interface';
import { Roles, Entities } from 'src/app/config/enums/default.enum';
import { Observable } from 'rxjs';
import { QueryDatabaseService } from '../database-service/query-database.service';
import { switchMap, first } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class SecurityService {
	constructor(private query:QueryDatabaseService,) {}

	checkAuthorization(user: CustomerUserInformation, isRoleValid: string): boolean {
		if (!user) return false;
		for (const role of user.role) {
			if (role == isRoleValid) {
				return true;
			}
		}
		return false;
	}

	matchAdmin(user: CustomerUserInformation): boolean {
		return this.checkAuthorization(user, Roles.Admin);
	}

	// isCustomer(user: CustomerUserInformation): boolean {
	// 	return this.checkAuthorization(user, Roles.Customer);
	// }

	// isSupplier(user: CustomerUserInformation): boolean {
	// 	return this.checkAuthorization(user, Roles.Supplier);
  // }
  

  isAdmin():Observable<boolean>{
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
          let result= this.matchAdmin(res2);
          observer.next(result);
        }),
        (err) => observer.error(err),
        () => observer.complete();
    });
  }
}
