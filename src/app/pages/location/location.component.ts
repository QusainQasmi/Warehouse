import { Component } from '@angular/core';
import { CsGridColumn } from '../../../core/shared/cs-setup/cs-setup.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
  standalone: false
})
export class LocationComponent {
  
    columns: CsGridColumn[] = [
      { key: 'locationId', label: 'S.No', sticky: true, sortable: true},
      { key: 'locationCode', label: 'Location Code', sticky: false, sortable: false},
      { key: 'description', label: 'Description', sticky: false, sortable: false},
      { key: 'warehouseName', label: 'Warehouse Name', sticky: false, sortable: true},
    ];
}
