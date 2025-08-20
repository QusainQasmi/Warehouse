import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsSelectComponent } from './cs-select.component';

describe('CsSelectComponent', () => {
  let component: CsSelectComponent;
  let fixture: ComponentFixture<CsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
