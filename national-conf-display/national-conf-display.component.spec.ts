import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalConfDisplayComponent } from './national-conf-display.component';

describe('NationalConfDisplayComponent', () => {
  let component: NationalConfDisplayComponent;
  let fixture: ComponentFixture<NationalConfDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalConfDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalConfDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
