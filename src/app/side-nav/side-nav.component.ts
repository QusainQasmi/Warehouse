import { Component, inject } from '@angular/core';
import { MatModules } from '../../core/mat-modules';
import { FormBuilder } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { FormList, FormName } from '../../common.enums';
import { PagesModule } from '../pages/pages.module';

@Component({
  selector: 'wms-side-nav',
  imports: [MatModules, RouterOutlet],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

  FormLstName: any[] = FormList;
  private _formBuilder = inject(FormBuilder);
  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

  constructor(public _router: Router){
    this._router = inject(Router);
  }

  openPages(row: any){
    switch(row?.value){
      case FormName.Warehouses:
        this._router.navigate(['pages/warehouse']);
      break;
      case FormName.Inventry:
        this._router.navigate(['pages/inventory']);
      break;
      // case FormName.SalesOrder:
      //   this._router.navigate(['pages/sales-order']);
      // break;
      case FormName.Product:
        this._router.navigate(['pages/product']);
      break;
      case FormName.Customer:
        this._router.navigate(['pages/customer']);
      break;
      case FormName.Location:
        this._router.navigate(['pages/location']);
      break;
    }
  }

}
