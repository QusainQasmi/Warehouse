import { Component } from '@angular/core';
import { CsGridColumn } from '../../../../../core/shared/cs-setup/cs-setup.component';
import { FromElement } from '../../../../../core/shared/cs-form/cs-form.component';
import { LocationService } from '../../../../services/location.service';
import { ElementType } from '../../../../../common.enums';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
  standalone: false
})

export class LocationComponent {

  columns: CsGridColumn[] = [
    { label: 'Code', key: 'unCode',  },
    { label: 'Name', key: 'unName' },
    { label: 'Address', key: 'unAddress' },
    { label: 'City', key: 'city' },
    { label: 'State', key: 'unState' },
    { label: 'Postal Code', key: 'postalCode' },
    { label: 'Country', key: 'country' },
    { label: 'Latitude', key: 'latitude' },
    { label: 'Longitude', key: 'longitude' },
    { label: 'Port', key: 'isPort' },
    { label: 'Airport', key: 'isAirport' },
    { label: 'Warehouse', key: 'isWarehouse' },
    { label: 'Pickup Point', key: 'isPickupPoint' },
    { label: 'Delivery Point', key: 'isDeliveryPoint' },
    { label: 'Active', key: 'isActive' },
  ];
  elements: FromElement[] = [
    {
      col: 12,
      elemType: ElementType.RadioButton,
      label: 'select option',
      key: 'isradio',
      required: true,
      valueField: 'id',
      displayField: 'name',
      datasource: [
        {name: 'option 1', id: 1 },
        {name: 'option 2', id: 2 }
    ],
    },

    {
      col: 12,
      elemType: ElementType.Input,
      label: 'Name',
      key: 'locName',
      required: true
    },
    {
      col: 12,
      elemType: ElementType.Input,
      label: 'Country',
      key: 'country',
      required: true
    },
    // {
    //   col: 12,
    //   elemType: ElementType.Textbox,
    //   label: 'Test Here',
    //   key: 'test',
    //   required: true,
    //   rows: 4,
    //   appearance: 'outline'
    // }
  ];

  constructor(public _service: LocationService){}

  ngOnInit(){
  }
}
