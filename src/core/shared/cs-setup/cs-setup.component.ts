import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'cs-setup',
  standalone: false,
  templateUrl: './cs-setup.component.html',
  styleUrl: './cs-setup.component.scss'
})
export class CsSetupComponent {

  @Input() datasource: any[] = [];
  @Input() columns: CsGridColumn[] = [];
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnChanges() {
    if (this.datasource) {
      this.dataSource.data = this.datasource;
    }
    if (this.columns) {
      this.displayedColumns = ['actions', ...this.columns.map(c => c.key)];
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface CsGridColumn {
  key: string;
  label: string;
  sticky?: boolean;
  sortable?: boolean;
  cellTemplate?: any;
}