import { EnquiryStatus } from '../enums/default.enum';

export interface Enquiry{
    createdBy?:string;
    status?:EnquiryStatus[];
    description:string;
    productId:string;
    createdDate?:Date;
    categoryId:string;
    ratings?:number; 
}