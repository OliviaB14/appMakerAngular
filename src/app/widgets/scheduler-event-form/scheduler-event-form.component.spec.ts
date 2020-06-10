import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerEventFormComponent } from './scheduler-event-form.component';

describe('SchedulerEventFormComponent', () => {
  let component: SchedulerEventFormComponent;
  let fixture: ComponentFixture<SchedulerEventFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulerEventFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
