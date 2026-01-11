import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cs-search-bar',
  standalone: false,
  templateUrl: './cs-search-bar.component.html',
  styleUrl: './cs-search-bar.component.scss'
})
export class CsSearchBarComponent {

  searchTxt: any;
  @Input("datasource") datasource: any[] = [];
  @Output() datasourceChange = new EventEmitter<any>();

  onSearch() {
    const txt = this.searchTxt?.toUpperCase();
    let searchLst = [];
    if(!txt) {
      searchLst = this.datasource;
    } else {
      searchLst = this.datasource.filter(item => Object.values(item).some((val: any) =>
         val && val.toString().toUpperCase().includes(txt)));
    }
    this.datasourceChange.emit(searchLst);
  }
}
