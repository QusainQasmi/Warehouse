import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsGridComponent } from './cs-grid.component';

describe('CsGridComponent', () => {
  let component: CsGridComponent;
  let fixture: ComponentFixture<CsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
