import {
  Component,
  Input,
  ViewChild,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  TemplateRef,
  OnInit,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subject } from 'rxjs';
import { CsDialogComponent } from '../cs-dialog/cs-dialog.component';
import { DialogService } from '../../services/dialog.service';
import { FromElement } from '../cs-form/cs-form.component';
import { ApiResponse } from '../../ApiResponse';
import { GlobalHelpers } from '../../GlobalHelpers';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'cs-setup',
  standalone: false,
  templateUrl: './cs-setup.component.html',
  styleUrls: ['./cs-setup.component.scss'],
})
export class CsSetupComponent implements OnChanges, OnDestroy, OnInit {

  @Input() columns: CsGridColumn[] = [];
  @Input() controllerName!: string;
  @Input() title: string = "";
  @Input() width: string = "80vw";
  private _elements: FromElement[] = [];
  @Input()
  set elements(value: FromElement[]) {
    this._elements = value;
  }
  
  get elements(): any[] {
    return this._elements;
  }

  private _service: any;
  @Input()
  set service(value: any) {
    this._service = value;
  }
  
  get service(): any{
    return this._service;
  }
  
  duplicateData: any[] = [];
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>([]);
  isLoading = false;
  isSaving = false;
  filterValue = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    // private _setupService: SetupService,
    private _dialogService: DialogService,
    private _toaster: ToasterService,
  ) { }

  get displayColumnKeys() {
    return this.displayedColumns;
  }

  private destroy$ = new Subject<void>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns']) {
      this.displayedColumns = [...this.columns.map((c) => c.key), 'actions'];
    }
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadData();
  }

  changeDatasource(event: any) {
    if (event?.length > 0) {
      this.dataSource.data = event;
    } else {
      this.dataSource.data = this.duplicateData;
    }
  }

  async loadData(){
    this.isLoading = true;
    const result: ApiResponse = await this.service?.getAllData();
    this.isLoading = false;
    if(!result?.IsSuccess || !result.Data || result.Data?.length === 0) {
      this.dataSource.data = [];
      this.duplicateData = [];
      return;
    }
    this.dataSource.data = Array.isArray(result.Data) ? result.Data : [];
    this.duplicateData = this.dataSource.data;
  }

  async openFormFn(row?: any){
    const dialogRef = this._dialogService.open(CsDialogComponent, {
      title: row ? `Edit ${this.title}` : `Add ${this.title}`,
      model: row ? row : {},
      elements: this.elements
    }, undefined, this.width);

    dialogRef.afterClosed().subscribe((model: any) => {
      if(row) this.updateData(model);
      else this.addNewRecord(model);
    })
  }

  async addNewRecord(data: any){
    const errors = GlobalHelpers.ValidateModel(this.elements, data);
    if(Array.isArray(errors) && errors.length > 0){
      this._toaster.Error(errors);
      return;
    }
    const res: ApiResponse = await this.service?.save(data);
    if(!res?.IsSuccess || !res.Data || res.Data?.length === 0) {
      this.dataSource.data = [];
      this.duplicateData = [];
      return;
    }
    this._dialogService.closeAll();
    this._toaster.Success(`Record Add Successfully!`);
  }
  
  updateData(data: any){}
  deleteItem(data: any){}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

export interface CsGridColumn {
  key: string;
  label: string;
  sortable?: boolean;
  sticky?: boolean;
  isDate?: boolean;
  isNumber?: boolean;
  template?: TemplateRef<{ $implicit: any }> | null;
}
