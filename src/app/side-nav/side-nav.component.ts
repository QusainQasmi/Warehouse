import { Component, inject } from '@angular/core';
import { MatModules } from '../../core/mat-modules';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { FormList, Modules } from '../../common.enums';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'wms-side-nav',
  standalone: true,
  imports: [MatModules, RouterOutlet, MatExpansionModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  FormLstName = FormList;
  options: FormGroup;
  expanded: Record<string, boolean> = {};
  private _router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.options = this.fb.group({
      bottom: 0,
      fixed: false,
      top: 0,
    });
  }

  toggleItem(item: any) {
    const key = item?.value;
    this.expanded[key] = !this.expanded[key];
  }

  isExpanded(item: any): boolean {
    return !!this.expanded[item?.value];
  }

  openPages(item: any) {
    const routesMap: Record<string, string> = {
      [Modules.Setup]: 'warehouse/list',
      [Modules.Analytics]: 'Analytics',
      // [FormName.WarehouseForm]: 'warehouse/form',
      // [FormName.Inventory]: 'inventory',
      // [FormName.Product]: 'product',
      // [FormName.Customer]: 'customer',
      // [FormName.Location]: 'location',
      // [FormName.Sales]: 'sales',
    };

    const route = routesMap[item?.value];
    if (route) {
      this._router.navigate([route]);
    }
  }
}
