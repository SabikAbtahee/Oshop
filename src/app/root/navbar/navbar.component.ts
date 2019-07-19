import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject, Subscription, observable } from 'rxjs';
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
	$username: Observable<any>;
	menuItems;
	selectedRow: number;
	_unsubscribeAll: Subject<any>;
	constructor(
		private breakpointObserver: BreakpointObserver,
		private aut: AuthenticationService,
		private router: Router,
		private corequery: QueryDatabaseService,
		private sharedService: SharedService
	) {
		this._unsubscribeAll = new Subject();
	}

	ngOnInit() {
		this.initiateVariables();
		this.setUsername();
		this.selectedRow = 1;
		this.route(defaultConst.sidebar[1].url);
		// console.log(this.isHandset$.subscribe(res=>console.log(res)));
		// console.log(this.aut.getCurrentUser());
	}

	initiateVariables() {
		this.title = defaultConst.siteName.name;
		this.sidebar = defaultConst.sidebar;
		this.menuItems = defaultConst.menu;

		this.sharedService.$username.subscribe((res) => {
			this.$username = new Observable((obser) => {
				obser.next(res);
			});
		});

		this.sharedService.menuIndex.subscribe(res=>{
			this.selectedRow=res;
		})
	}

	setUsername() {
		this.corequery.getLoggedInUserID().pipe(takeUntil(this._unsubscribeAll)).subscribe((res) => {
			if (res) {
				this.getUserName(res).pipe(takeUntil(this._unsubscribeAll)).subscribe((res) => {
					this.Username = res;
					this.sharedService.Username.next(this.Username);
				});
			} else {
				this.Username = Roles.Anonymous;
				this.sharedService.Username.next(Roles.Anonymous);
			}
		});
	}

	getUserName(uid): Observable<any> {
		let personInfo: CustomerUserInformation;

		return new Observable((observer) => {
			this.corequery
				.getSingleData(Entities.Person, uid)
				.pipe(takeUntil(this._unsubscribeAll))
				.subscribe((res) => {
					personInfo = res;
					observer.next(personInfo && personInfo.name ? personInfo.name : null);
				});
		});
	}

	logout() {
		this.aut.signOut();
		this.showLogoutSnackbar();
	}

	showLogoutSnackbar() {
		this.sharedService.openSnackBar({
			data: {
				message: 'Logged out successfully',
				isAccepted: true
			},
			duration: 3,
			horizontalPosition: 'right',
			verticalPosition: 'top',
			panelClass: [ 'default-snackbar' ]
		});
	}

	ngOnDestroy() {
		this._unsubscribeAll.next();
		this._unsubscribeAll.complete();
		this._unsubscribeAll.unsubscribe();
	}
	route(url) {
		this.router.navigateByUrl(url);
		if (url == defaultConst.menu.profile.url) {
			this.sharedService.menuIndex.next(-1);
		}
	}
	selectRow(index) {
		this.selectedRow = index;
		// console.log(this.selectedRow);
	}
}
