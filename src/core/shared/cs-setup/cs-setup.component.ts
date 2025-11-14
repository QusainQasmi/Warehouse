import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SetupService } from '../../services/setup.service';
// import { DialogService } from '../../services/dialog.service';
// import { CsDialogComponent } from '../cs-dialog/cs-dialog.component';

@Component({
  selector: 'cs-setup',
  standalone: false,
  templateUrl: './cs-setup.component.html',
  styleUrl: './cs-setup.component.scss'
})
export class CsSetupComponent {

  @Input() columns: CsGridColumn[] = [];
  @Input() controllerName: string | any;
  displayedColumns: string[] = [];
  dataSource: any = new MatTableDataSource<any>();
  isLoading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public _setupService: SetupService){}

  async getDatasource(){
    const res: any = await this._setupService.getData("GetAllData");
    this.isLoading = false;
    if(res.IsSuccess)
      return res.Data;
    else 
      return res.Message; 
  }

  ngOnChanges() {
    this._setupService.setControllerName(this.controllerName);
    if (this.columns) {
      this.displayedColumns = ['actions', ...this.columns.map(c => c.key)];
    }
  }

  onEdit(row: any){
    // this._dialogService.open(CsDialogComponent, {
    //   title: 'Edit Testing',
    //   width: "40vw",
    //   content: JSON.stringify(row),
    //   buttons: [
    //     { text: 'Cancel', color: 'warn' },
    //     { text: 'Ok', color: 'primary', action: (data: any) => this._dialogService.closeAll() }
    //   ]
    // });
    // public _dialogService: DialogService
  }

  async ngAfterViewInit() {
    this.isLoading = true;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.data = await this.getDatasource();
  }

}

export interface CsGridColumn {
  key: string;
  label: string;
  sticky?: boolean;
  sortable?: boolean;
  cellTemplate?: any;
  isDate?: boolean;
}