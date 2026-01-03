import { Component } from '@angular/core';
import { CsGridColumn } from '../../../../../core/shared/cs-setup/cs-setup.component';

@Component({
  selector: 'app-product',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  standalone: false
})
export class ProductComponent {
  
  columns: CsGridColumn[] = [
    { key: 'productId', label: 'S.No', sticky: true, sortable: true},
    { key: 'sku', label: 'Product No', sticky: false, sortable: true},
    { key: 'name', label: 'Product Name', sticky: false, sortable: false},
    { key: 'description', label: 'Description', sticky: false, sortable: false},
    { key: 'unitPrice', label: 'Price', sticky: false, sortable: false, isNumber: true},
    { key: 'createdAt', label: 'Created Date', sticky: false, sortable: false, isDate: true},
  ];
}
