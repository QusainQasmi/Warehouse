import { Component, Input } from '@angular/core';

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
}
