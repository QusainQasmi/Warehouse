import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsInputComponent } from './cs-input.component';

describe('CsInputComponent', () => {
  let component: CsInputComponent;
  let fixture: ComponentFixture<CsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
