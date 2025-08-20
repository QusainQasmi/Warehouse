export enum FormName {
    Warehouses = 1,
    Inventry,
    SalesOrder,
    Product,
    Location,
    Customer,
}

export const FormList: any[] = [
 { name: 'Warehouses', value: FormName.Warehouses },
 { name: 'Inventry', value: FormName.Inventry },
 { name: 'Sales Order', value: FormName.SalesOrder },
 { name: 'Product', value: FormName.Product },
 { name: 'Location', value: FormName.Location },
 { name: 'Customer', value: FormName.Customer }
];
