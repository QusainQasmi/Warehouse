export enum FormName {
    Warehouses = 1,
    Inventry,
    SalesOrder,
    Product,
    Location,
    Customer,
}

export enum ElementType {
    Autocomplete = 1,
    Select,
    Input,
    Button,
    RadioButton,
    Date,
    Checkbox,
    Chip,
}

export const FormList: any[] = [
 { name: 'Warehouses', value: FormName.Warehouses },
 { name: 'Inventry', value: FormName.Inventry },
//  { name: 'Sales Order', value: FormName.SalesOrder },
 { name: 'Product', value: FormName.Product },
 { name: 'Location', value: FormName.Location },
 { name: 'Customer', value: FormName.Customer }
];
