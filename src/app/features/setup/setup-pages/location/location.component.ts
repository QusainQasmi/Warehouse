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
    { label: 'Code', key: 'locCode' },
    { label: 'Name', key: 'locName' },
    { label: 'Country', key: 'Country' },
  ];
  elements: FromElement[] = [
    {
      col: 12,
      elemType: ElementType.Input,
      label: 'Code',
      key: 'locCode',
      required: true
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
