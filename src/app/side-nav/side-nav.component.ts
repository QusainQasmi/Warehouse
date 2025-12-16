import { Component, inject } from '@angular/core';
import { MatModules } from '../../core/mat-modules';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { FormList, FormName } from '../../common.enums';

@Component({
  selector: 'wms-side-nav',
  standalone: true,
  imports: [MatModules, RouterOutlet],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  FormLstName = FormList;
  options: FormGroup;
  private _router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.options = this.fb.group({
      bottom: 0,
      fixed: false,
      top: 0,
    });
  }

  openPages(item: any) {
    const routesMap: Record<string, string> = {
      [FormName.Warehouses]: 'warehouse',
      // [FormName.Warehouses]: 'pages/warehouse', // sub-form
      [FormName.Inventory]: 'inventory',
      [FormName.Product]: 'product',
      [FormName.Customer]: 'customer',
      [FormName.Location]: 'location',
    };

    const route = routesMap[item?.value];
    if (route) {
      this._router.navigate([route]);
    }
  }
}
