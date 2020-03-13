import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalConfFormComponent } from './international-conf-form.component';

describe('InternationalConfFormComponent', () => {
  let component: InternationalConfFormComponent;
  let fixture: ComponentFixture<InternationalConfFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalConfFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalConfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
