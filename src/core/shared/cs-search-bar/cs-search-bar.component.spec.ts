import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsSearchBarComponent } from './cs-search-bar.component';

describe('CsSearchBarComponent', () => {
  let component: CsSearchBarComponent;
  let fixture: ComponentFixture<CsSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsSearchBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
