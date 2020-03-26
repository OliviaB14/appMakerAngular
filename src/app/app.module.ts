import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextEditorComponent } from './widgets/text-editor/text-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeViewComponent } from './widgets/tree-view/tree-view.component';
import { SchedulerComponent } from './widgets/scheduler/scheduler.component';
import { SchedulerDayComponent } from './widgets/scheduler-day/scheduler-day.component';
import { SchedulerWeekComponent } from './widgets/scheduler-week/scheduler-week.component';
import { SchedulerMonthComponent } from './widgets/scheduler-month/scheduler-month.component';

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    TreeViewComponent,
    SchedulerComponent,
    SchedulerDayComponent,
    SchedulerWeekComponent,
    SchedulerMonthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
