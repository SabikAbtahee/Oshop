export enum Roles{
    Admin='Admin',
    Customer='Customer',
    Supplier='Supplier',
    Anonymous='Anonymous'
}

export enum RolesView{
    Customer='Customer',
    Supplier='Supplier'
}

export enum ProductStatus{
    InStock='InStock',
    SoldOut='SoldOut',
    ComingSoon='ComingSoon',
}

export enum Entities {
	Person = 'Person',
	Product = 'Product',
	Category = 'Category',
	Location = 'Location',
	Roles = 'Roles',
	Enquiry = 'Enquiry',
	Purchase = 'Purchase',
	Brand = 'Brand',
	Notification = 'Notification'
}

export enum EnquiryStatus{
    Successful='Successful',
    Unsuccessful='Unsuccessful',
    Fraud='Fraud',
}
