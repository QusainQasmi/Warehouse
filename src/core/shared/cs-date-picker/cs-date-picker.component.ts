import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-date-picker',
  standalone: false,
  templateUrl: './cs-date-picker.component.html',
  styleUrl: './cs-date-picker.component.scss'
})
export class CsDatePickerComponent {
  
  @Input() hint: string = "MM/DD/YYYY";
  @Input() label: string = "";

}
