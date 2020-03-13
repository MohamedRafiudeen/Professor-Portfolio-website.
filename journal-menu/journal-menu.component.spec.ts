import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalMenuComponent } from './journal-menu.component';

describe('JournalMenuComponent', () => {
  let component: JournalMenuComponent;
  let fixture: ComponentFixture<JournalMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
