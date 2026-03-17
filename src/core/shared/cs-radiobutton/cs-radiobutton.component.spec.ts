import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CsRadiobuttonComponent } from './cs-radiobutton.component';

describe('CsRadiobuttonComponent', () => {
  let component: CsRadiobuttonComponent;
  let fixture: ComponentFixture<CsRadiobuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsRadiobuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsRadiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
