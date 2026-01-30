import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'cs-checkbox',
  standalone: false,
  templateUrl: './cs-checkbox.component.html',
  styleUrl: './cs-checkbox.component.scss'
})
export class CsCheckboxComponent {

  @Input() label: string = "";
  @Input() csModel: any = false;
  

  
}
