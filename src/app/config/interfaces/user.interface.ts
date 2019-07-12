import { Roles } from '../enums/default.enum';
import { Place } from './place.interface';

export interface UserInformation {
	password: string;
	email: string;
	displayName?:string;
	metaData?:CustomerUserInformation;

}

export interface CustomerUserInformation {
	uid?:string;
	name?:string;
	email: string;
	role: Roles[];
	phoneNumber?: string;
	ratings?: number;
	homeAddress?: Place;
	shopAddress?: Place;
	enquiryLimit?: number;
}

export interface firebaseUserInformation {
	displayName?:string;
	email?:string;
	emailVerified?:string;
	isAnonymous?:string;
	metadata?:string;
	phoneNumber?:string;
	photoURL?:string;
	providerData?:string;
	providerId?:string;
	refreshToken?:string;
	uid?:string;
}
