import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cs-grid',
  standalone: false,
  templateUrl: './cs-grid.component.html',
  styleUrl: './cs-grid.component.scss'
})

export class CsGridComponent {

  @Input() isEditable: boolean = false;

}
