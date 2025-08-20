import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsSetupComponent } from './cs-setup.component';

describe('CsSetupComponent', () => {
  let component: CsSetupComponent;
  let fixture: ComponentFixture<CsSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
