import { Component } from '@angular/core';
import { CsGridColumn } from '../../../../../core/shared/cs-setup/cs-setup.component';
import { FromElement } from '../../../../../core/shared/cs-form/cs-form.component';
import { LocationService } from '../../../../services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
  standalone: false
})

export class LocationComponent {
  columns: CsGridColumn[] = [];
  elements: FromElement[] = [];

  constructor(public _service: LocationService){

  }
}
