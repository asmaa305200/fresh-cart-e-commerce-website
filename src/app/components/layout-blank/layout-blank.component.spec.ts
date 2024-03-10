import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBlankComponent } from './layout-blank.component';

describe('LayoutBlankComponent', () => {
  let component: LayoutBlankComponent;
  let fixture: ComponentFixture<LayoutBlankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutBlankComponent]
    });
    fixture = TestBed.createComponent(LayoutBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
