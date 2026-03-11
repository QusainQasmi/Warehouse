import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cs-input',
  templateUrl: './cs-input.component.html',
  styleUrl: './cs-input.component.scss',
  standalone: false
})
export class CsInputComponent {

  @Input() appearance: 'outline' | 'fill' = 'outline';
  @Input() label: string = "";
  @Input() csModel: any;
  @Input() required: boolean = false;
  @Output() csModelChange = new EventEmitter<any>();

  onModelChange(ev: any){
    this.csModel = ev ? ev : this.csModel;
    this.csModelChange.emit(this.csModel);
  }
}
