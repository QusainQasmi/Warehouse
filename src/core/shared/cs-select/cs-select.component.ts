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
  @Input() label: string = ""
}