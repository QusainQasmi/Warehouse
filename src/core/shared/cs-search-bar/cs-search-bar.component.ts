import { Component, Input } from '@angular/core';

@Component({
  selector: 'cs-search-bar',
  standalone: false,
  templateUrl: './cs-search-bar.component.html',
  styleUrl: './cs-search-bar.component.scss'
})
export class CsSearchBarComponent {

  searchTxt: any;
  @Input("datasource") datasource: any[] = [];
  duplicateData: any[] = [];

  // onSearch() {
  //   const txt = this.searchTxt.toUpperCase();
  //   if(!txt) {
  //     this.duplicateData = this.datasource;
  //   } else {
  //     this.duplicateData = this.datasource.map((x) => x.include(txt));
  //   }
  //   this.
  //   // console.log(this.searchTxt);
  //   // this.filterValue = value?.trim().toLowerCase() ?? '';
  //   // this.dataSource.filter = this.filterValue;
  // }
}
