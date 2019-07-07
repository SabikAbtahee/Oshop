import { Roles } from '../enums/default.enum';
import { Place } from './place.interface';

export interface UserInformation {
	name?: string;
	password: string;
	email: string;
	role: Roles[];
	phoneNumber?:string;
	ratings?:number;
	homeAddress?:Place;
	shopAddress?:Place;
	enquiryLimit?:number;
	imageUrl?:string;

}
