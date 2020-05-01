import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdetailsComponent } from './eventdetails.component';

describe('EventdetailsComponent', () => {
  let component: EventdetailsComponent;
  let fixture: ComponentFixture<EventdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
