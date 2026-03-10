
export enum ElementType {
    Autocomplete = "autocomplete",
    Select = "select",
    Input = "input", 
    Button = "button",
    RadioButton = "radiobutton",
    DatePicker = "datepicker",
    Checkbox = "checkbox",
    Chip = "chip",
    Textbox = "textbox",
    RichTextEditor = "richtexteditor",
    FileUpload = "fileupload",
    DisplayText = "displaytext",
    Row = "row",
}

export enum Modules {
  Setup = 'Setup',
  Transport = 'Transport',
  Shipment = 'Shipment',
  Import = 'Import',
  Export = 'Export',
  Inventory = 'Inventory',
  Warehouse = 'Warehouse',
  FleetManagement = 'FleetManagement',
  Analytics = 'Analytics',
  Utilities = 'Utilities',
}

export const FormList = [
  {
    name: 'Setup',
    value: Modules.Setup,
    icon: '',
    isShow: true,
    children: [
      { name: 'Curreny', icon: '', userRight: true },
      { name: 'Location', icon: '', userRight: true }
    ]
  },
  {
    name: 'Analytics',
    value: Modules.Analytics,
    // children: [
    //   { name: 'Stock Items', value: FormName.Inventory },
    //   // add more inventory-related routes here
    // ]
  },
  // {
  //   name: 'Products',
  //   value: FormName.Product,
  //   children: [
  //     { name: 'Catalog', value: FormName.Product }
  //   ]
  // },
  // { name: 'Customers', value: FormName.Customer },
  // { name: 'Locations', value: FormName.Location },
  // { name: 'Sales', value: FormName.Sales },
];