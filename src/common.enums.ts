
export enum ElementType {
    Autocomplete = "autocomplete",
    Select = "select",
    Input = "input", 
    Button = "button",
    RadioButton = "radiobutton",
    DatePicker = "datepicker",
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
  {
    name: 'Warehouses',
    value: FormName.Warehouses,
    children: [
      { name: 'List', value: FormName.Warehouses },
      { name: 'Add / Edit', value: FormName.WarehouseForm }
    ]
  },
  {
    name: 'Inventory',
    value: FormName.Inventory,
    children: [
      { name: 'Stock Items', value: FormName.Inventory },
      // add more inventory-related routes here
    ]
  },
  {
    name: 'Products',
    value: FormName.Product,
    children: [
      { name: 'Catalog', value: FormName.Product }
    ]
  },
  { name: 'Customers', value: FormName.Customer },
  { name: 'Locations', value: FormName.Location },
  { name: 'Sales', value: FormName.Sales },
];