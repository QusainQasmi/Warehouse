import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'cs-setup',
  standalone: false,
  templateUrl: './cs-setup.component.html',
  styleUrl: './cs-setup.component.scss'
})
export class CsSetupComponent {

  @Input() totalRecCount: number = 100;
  @Input() datasource: any[] = [];
  @Input() sortField: string = "id";
  @Input() column: string[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
  }

}
