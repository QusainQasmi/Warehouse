import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cs-checkbox',
  standalone: false,
  templateUrl: './cs-checkbox.component.html',
  styleUrl: './cs-checkbox.component.scss'
})
export class CsCheckboxComponent {

  @Input() label: string = "";
  @Input() csModel: any = false;
  @Output() csModelChange = new EventEmitter<any>();
  
  onChangeModel(value: any){
    this.csModel = value ? value : this.csModel;
    this.csModelChange.emit(this.csModel);
  }
}
