import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cs-textarea',
  standalone: false,
  templateUrl: './cs-textarea.component.html',
  styleUrl: './cs-textarea.component.scss'
})
export class CsTextareaComponent {

  @Input() appearance: 'outline' | 'fill' = "outline";
  @Input() label: string = '';
  @Input() rows: number = 2;
  @Input() required: boolean = false;
  @Input() csModel: any;
  @Output() csModelChange = new EventEmitter<any>();

  onChangeModel(ev: any){
    this.csModel = ev ? ev : this.csModel;
    this.csModelChange.emit(this.csModel);
  }

}