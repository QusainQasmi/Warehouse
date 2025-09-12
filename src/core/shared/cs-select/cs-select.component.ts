import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-select',
  standalone: false,
  templateUrl: './cs-select.component.html',
  styleUrl: './cs-select.component.scss'
})

export class CsSelectComponent {
  @Input() csModel: any = null;
  @Input() datasource: any[] = [];
  @Input() valueField: string = "";
  @Input() displayField: string = "";
  @Input() label: string = "";
  @Input() appearance: 'outline' | 'fill' = 'outline';

  get _datasource(): any[] {
    return this.datasource;
  }
  set _datasource(data: any[]) {
    this._datasource = data;
  }
}