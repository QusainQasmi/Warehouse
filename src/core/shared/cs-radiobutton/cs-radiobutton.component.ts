import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cs-radiobutton',
  standalone: false,
  templateUrl: './cs-radiobutton.component.html',
  styleUrl: './cs-radiobutton.component.scss'
})
export class CsRadiobuttonComponent {

  @Input() label: string = '';
  @Input() displayField: string = 'name';
  @Input() valueField: string = 'value';
  @Input() required: boolean = false;
  @Input() csModel:  any;
  @Input() datasource: any[] = [];
  @Output() csModelChange = new EventEmitter<any>();


  onChangeModel(ev: any){
    this.csModel = ev ? ev : this.csModel;
    this.csModelChange.emit(this.csModel);
  }

}
