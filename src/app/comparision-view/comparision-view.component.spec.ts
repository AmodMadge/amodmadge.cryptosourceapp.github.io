import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisionViewComponent } from './comparision-view.component';

describe('ComparisionViewComponent', () => {
  let component: ComparisionViewComponent;
  let fixture: ComponentFixture<ComparisionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparisionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
