import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDisplayComponent } from './students-display.component';

describe('StudentsDisplayComponent', () => {
  let component: StudentsDisplayComponent;
  let fixture: ComponentFixture<StudentsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
