import { Component, OnInit } from '@angular/core';
import {ScheduleButton} from "./models/schedule-button";

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {

  buttons: ScheduleButton[] = [
    { label: "Day", isSelected: true },
    { label: "Week", isSelected: false },
    { label: "Month", isSelected: false },
  ];

  constructor() { }

  ngOnInit() {
  }

  selectPeriod(button: ScheduleButton) {
    this.buttons.forEach(b => {
      if(b == button) { button.isSelected = ! button.isSelected; }
      else { b.isSelected = false; }
    });
  }
}
