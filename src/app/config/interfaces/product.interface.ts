import { ProductStatus } from '../enums/default.enum';

export interface Product{
    name:string;
    categoryId?:string;
    ownerId?:string;
    description?:string;
    quantity?:number;
    placeId:string,
    price:number;
    status:ProductStatus;
    preferenceLevel?:number;
    imageURL?:string;

}