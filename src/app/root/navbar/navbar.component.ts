import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil, first } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { Router } from '@angular/router';
import { defaultConst } from '../../config/constants/defaultConstants';
import { QueryDatabaseService } from '../../core/database-service/query-database.service';
import { Entities, Roles } from '../../config/enums/default.enum';
import { CustomerUserInformation } from '../../config/interfaces/user.interface';
import { SharedService } from '../../shared/services/shared.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent implements OnInit, OnDestroy {
	isHandset$: Observable<boolean> = this.breakpointObserver
		.observe(Breakpoints.Handset)
		.pipe(map((result) => result.matches));

	title: string;
	sidebar;
	Username: string;
	menuItems;

	constructor(
		private breakpointObserver: BreakpointObserver,
		private aut: AuthenticationService,
		private router: Router,
		private corequery: QueryDatabaseService,
		private sharedService: SharedService
	) {}

	ngOnInit() {
		this.initiateVariables();
		this.setUsername();
		// console.log(this.aut.getCurrentUser());
	}

	initiateVariables() {
		this.title = defaultConst.siteName.name;
		this.sidebar = defaultConst.sidebar;
		this.menuItems = defaultConst.menu;
	}

	setUsername() {
		this.corequery.getLoggedInUserID().pipe(first()).subscribe((res) => {
			if (res) {
				this.getUserName(res).pipe(first()).subscribe((res) => {
					this.Username = res;
				});
			} else {
				this.Username = Roles.Anonymous;
			}
		});
	}

	getUserName(uid): Observable<any> {
		let personInfo: CustomerUserInformation;

		return new Observable((observer) => {
			this.corequery.getSingleData(Entities.Person, uid).pipe(first()).subscribe((res) => {
				personInfo = res;
				observer.next(personInfo && personInfo.name ? personInfo.name : null);
			});
		});
	}

	

	logout() {
		this.aut.signOut();
		this.showLogoutSnackbar();

	}

	showLogoutSnackbar(){
		this.sharedService.openSnackBar({
			data:{
				message:'Logged out successfully',
				isAccepted:true
			},
			duration:3,
			horizontalPosition:'right',
			verticalPosition:'top',
			panelClass:['default-snackbar']
		})
	}

	ngOnDestroy() {}
}
