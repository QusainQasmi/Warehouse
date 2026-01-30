import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsDatePickerComponent } from './cs-date-picker.component';

describe('CsDatePickerComponent', () => {
  let component: CsDatePickerComponent;
  let fixture: ComponentFixture<CsDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsDatePickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
