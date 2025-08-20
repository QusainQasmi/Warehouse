import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'cs-autocomplete',
  standalone: false,
  templateUrl: './cs-autocomplete.component.html',
  styleUrl: './cs-autocomplete.component.scss',
})
export class CsAutocompleteComponent implements ControlValueAccessor {
  @Input() options: any[] = [];
  @Input() labelKey: string = 'label';
  @Input() valueKey: string = 'value';
  @Input() type: string = 'text';
  @Input() appearance: 'outline' | 'fill' = 'outline';

  searchText: string = '';
  value: any;
  onChange = (value: any) => {};
  onTouched = () => {};

  get filteredOptions() {
    return this.options.filter(option => option[this.labelKey].toLowerCase().includes(this.searchText.toLowerCase()));
  }

  selectOption(option: any) {
    this.value = option[this.valueKey];
    this.searchText = option[this.labelKey];
    this.onChange(this.value);
  }

  writeValue(value: any): void {
    this.value = value;
    if (value) {
      const selected = this.options.find(o => o[this.valueKey] === value);
      this.searchText = selected ? selected[this.labelKey] : '';
    }
  }

  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
}
