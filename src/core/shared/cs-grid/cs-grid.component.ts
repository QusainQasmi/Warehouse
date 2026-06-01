import { Component, Input } from '@angular/core';
import { CsGridColumn } from '../cs-setup/cs-setup.component';

@Component({
  selector: 'cs-grid',
  standalone: false,
  templateUrl: './cs-grid.component.html',
  styleUrl: './cs-grid.component.scss'
})

export class CsGridComponent {

  @Input() columns: CsGridColumn[] = [];
  @Input() data: any[] = [];
  @Input() isEditable: Boolean = false;

  searchText = '';
  filteredData: any[] = [];


  ngOnInit() {
    this.filteredData = [...this.data];
  }

  applyFilter() {
    const text = this.searchText.toLowerCase();

    this.filteredData = this.data.filter(x =>
      x.name.toLowerCase().includes(text) ||
      x.email.toLowerCase().includes(text) ||
      x.id.toString().includes(text)
    );
  }

  addRow() {
    this.data.push({
      id: this.data.length + 1,
      name: '',
      email: ''
    });

    this.applyFilter();
  }

  deleteRow(row: any) {
    this.data = this.data.filter(x => x !== row);
    this.applyFilter();
  }

}