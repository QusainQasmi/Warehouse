
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
export enum FormName {
  Warehouses = 'Warehouses',
  WarehouseForm = 'WarehouseForm',
  Inventory = 'Inventory',
  Product = 'Product',
  Customer = 'Customer',
  Location = 'Location',
}

export const FormList = [
  { name: 'Warehouses', value: FormName.Warehouses },
  { name: 'Inventory', value: FormName.Inventory },
  { name: 'Products', value: FormName.Product },
  { name: 'Customers', value: FormName.Customer },
  { name: 'Locations', value: FormName.Location },
];