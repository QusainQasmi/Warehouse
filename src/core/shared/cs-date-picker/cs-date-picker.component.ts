import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GlobalHelpers } from '../../GlobalHelpers';

@Component({
  selector: 'cs-date-picker',
  standalone: false,
  templateUrl: './cs-date-picker.component.html',
  styleUrl: './cs-date-picker.component.scss'
})
export class CsDatePickerComponent {
  
  @Input() hint: string = "MM/DD/YYYY";
  @Input() label: string = "";
  @Input() csModel: any;
  @Output() csModelChange = new EventEmitter<any>();

  displayDate: any;

  onChangeModel(value: any){
    this.csModel = value ? value : this.csModel;
    this.csModelChange.emit(this.csModel);
    // this.displayDate = GlobalHelpers.setDate(this.csModel)
  }

}
