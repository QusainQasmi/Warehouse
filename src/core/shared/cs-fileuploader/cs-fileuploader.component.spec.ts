import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsFileuploaderComponent } from './cs-fileuploader.component';

describe('CsFileuploaderComponent', () => {
  let component: CsFileuploaderComponent;
  let fixture: ComponentFixture<CsFileuploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsFileuploaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsFileuploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
