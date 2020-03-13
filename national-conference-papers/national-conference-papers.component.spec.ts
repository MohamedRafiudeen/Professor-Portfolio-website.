import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalConferencePapersComponent } from './national-conference-papers.component';

describe('NationalConferencePapersComponent', () => {
  let component: NationalConferencePapersComponent;
  let fixture: ComponentFixture<NationalConferencePapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalConferencePapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalConferencePapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
