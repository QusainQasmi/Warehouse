import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsAutocompleteComponent } from './cs-autocomplete.component';

describe('CsAutocompleteComponent', () => {
  let component: CsAutocompleteComponent;
  let fixture: ComponentFixture<CsAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsAutocompleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
