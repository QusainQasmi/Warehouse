import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsCheckboxComponent } from './cs-checkbox.component';

describe('CsCheckboxComponent', () => {
  let component: CsCheckboxComponent;
  let fixture: ComponentFixture<CsCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
