import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PasswordChangeComponent } from '../components/password-change/password-change.component';

@Injectable({
	providedIn: 'root'
})
export class PasswordModalService {
	constructor(public dialog: MatDialog) {}

	openPasswordChangeModal(width?: string) {
		const dialogRef = this.dialog.open(PasswordChangeComponent, {
			width: width ? width : '25vw'
			// height:'60vh'
		});

		// dialogRef.afterClosed().subscribe(result => {
		// console.log('The dialog was closed',result);
		// });
	}
}
