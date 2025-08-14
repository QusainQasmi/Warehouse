import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatModules } from '../../../core/mat-modules';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-side-nav',
  imports: [MatModules],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

  private _formBuilder = inject(FormBuilder);

  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

}
