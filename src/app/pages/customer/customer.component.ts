import { Component } from '@angular/core';
import { CsGridColumn } from '../../../core/shared/cs-setup/cs-setup.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
  standalone: false
})
export class CustomerComponent {

  columns: CsGridColumn[] = [
    { key: 'customerId', label: 'S.No', sticky: true, sortable: true},
    { key: 'name', label: 'Name', sticky: false, sortable: true},
    { key: 'email', label: 'Email', sticky: false, sortable: false},
    { key: 'person', label: 'Person', sticky: false, sortable: false},
    { key: 'city', label: 'City', sticky: false, sortable: false},
    { key: 'country', label: 'Country', sticky: false, sortable: false},
  ];

}
