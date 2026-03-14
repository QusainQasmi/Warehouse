import { Component } from '@angular/core';
import { MatModules } from '../../core/mat-modules';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Modules } from '../../common.enums';
import { MatExpansionModule } from '@angular/material/expansion';
import { SharedModule } from '../../core/shared/shared.module';

@Component({
  selector: 'wms-side-nav',
  standalone: true,
  imports: [SharedModule, RouterOutlet, RouterModule, MatExpansionModule, MatModules],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  // LayoutLst: any[] = [];
  expanded: Record<string, boolean> = {};

  constructor(public _router: Router) { }

  selectId: any = null;
  data = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },  
  ]

  // toggleItem(item: any) {
  //   const key = item?.value;
  //   this.expanded[key] = !this.expanded[key];
  // }

  // isExpanded(item: any): boolean {
  //   return !!this.expanded[item?.value];
  // }

  openPages(item: any) {
    if (item?.path) {
      this._router.navigate([item.path]);
    }
  }
isCollapsed = false;

toggleSidebar() {
  this.isCollapsed = !this.isCollapsed;
}

menu = [

{
name: 'Dashboard',
icon: 'dashboard',
route: '/dashboard'
},

{
name: 'Warehouse',
icon: 'warehouse',
route: '/warehouse'
},

{
name: 'Inventory',
icon: 'inventory',
route: '/inventory'
},

{
name: 'Orders',
icon: 'shopping_cart',
route: '/orders'
},

{
name: 'Reports',
icon: 'bar_chart',
route: '/reports'
}

];

  ngOnInit() {
    // this.LayoutLst = [
    //   {
    //     name: 'Setup',
    //     value: Modules.Setup,
    //     icon: '',
    //     userRight: true,
    //     children: [
    //       { name: 'Location', path: '/setup/location', icon: '', userRight: true },
    //       { name: 'party', path: '/setup/party', icon: '', userRight: true }
    //     ]
    //   },
    // ];
  }

  ngAfterViewInit() {
  }
}
