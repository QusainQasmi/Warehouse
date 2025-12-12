
export enum ElementType {
    Autocomplete = "autocomplete",
    Select = "select",
    Input = "input", 
    Button = "button",
    RadioButton = "radiobutton",
    Date = "date",
    Checkbox = "checkbox",
    Chip = "chip",
}

export enum FormName {
  Warehouses = 'Warehouses',
  WarehouseForm = 'WarehouseForm',
  Inventory = 'Inventory',
  Product = 'Product',
  Customer = 'Customer',
  Location = 'Location',
  Sales = 'Sales',
}

export const FormList = [
  { name: 'Warehouses', value: FormName.Warehouses },
  { name: 'Inventory', value: FormName.Inventory },
  { name: 'Products', value: FormName.Product },
  { name: 'Customers', value: FormName.Customer },
  { name: 'Locations', value: FormName.Location },
  { name: 'Sales', value: FormName.Sales },
];