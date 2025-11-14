import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsFormComponent } from './cs-form.component';

describe('CsFormComponent', () => {
  let component: CsFormComponent;
  let fixture: ComponentFixture<CsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
