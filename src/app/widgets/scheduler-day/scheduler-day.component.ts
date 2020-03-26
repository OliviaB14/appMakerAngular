import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {Event} from "../scheduler/models/event";
import {EventCategory} from "../scheduler/models/event-category";
import {Day} from "../scheduler/models/day";

@Component({
  selector: 'app-scheduler-day',
  templateUrl: './scheduler-day.component.html',
  styleUrls: ['./scheduler-day.component.scss']
})
export class SchedulerDayComponent implements OnInit {

  Categories: EventCategory[] = [
    {color: '#E74C3C', icon: 'ri-alert-line', name: 'important'},
    {color: '#FAD7A0', icon: 'ri-alert-line', name: 'medium'},
    {color: '#FDFEFE', icon: 'ri-alert-line', name: 'normal'},
  ];

  Events : Event[] = [
    { id: 0, title: 'Meeting', date: new Date(), description: '', category: this.Categories[0], hour: 12},
    { id: 1, title: 'Meeting 2', date: new Date(), description: '', category: this.Categories[2], hour: 8},
    { id: 2, title: 'Meeting 3', date: new Date(), description: '', category: this.Categories[1], hour: 17},
  ];

  SchedulerDays: Day[] = [
    { name: 'Monday', eventsList: [], isDisabled: false },
    { name: 'Tuesday', eventsList: [], isDisabled: false },
    { name: 'Wednesday', eventsList: [], isDisabled: false },
    { name: 'Thursday', eventsList: [], isDisabled: false },
    { name: 'Friday', eventsList: [], isDisabled: false },
    { name: 'Saturday', eventsList: [], isDisabled: true },
    { name: 'Sunday', eventsList: [], isDisabled: true },
  ];

  constructor() { }

  ngOnInit() {
    this.setEventsToDay();
  }

  setEventsToDay() {
    this.SchedulerDays.forEach(day => {
      day.eventsList = [...this.shuffleArray(this.Events)];
    });
  }

  dropEventsInDay(event: CdkDragDrop<Event[]>, day: Day) {
    moveItemInArray(day.eventsList, event.previousIndex, event.currentIndex);
  }

  // DEVELOPMENT PURPOSE
  private shuffleArray(array): [] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

}
