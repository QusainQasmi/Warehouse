import { Component } from '@angular/core';
import { CsGridColumn } from '../../../../../core/shared/cs-setup/cs-setup.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.scss',
  standalone: false
})
export class InventoryComponent {

  columns: CsGridColumn[] = [
    { key: 'inventoryId', label: 'S.No', sticky: true, sortable: true},
    { key: 'productName', label: 'Product Name', sticky: false, sortable: true},
    { key: 'locationCode', label: 'Location Code', sticky: false, sortable: false},
    { key: 'quantity', label: 'Quantity', sticky: false, sortable: false}
  ];

  constructor(){}
}
