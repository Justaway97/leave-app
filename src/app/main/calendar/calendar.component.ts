import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SECONDS_IN_DAY } from 'calendar-utils';
import { SECONDS_PER_DAY } from 'src/app/template/constant/constant';
import { CALENDAR_DAYS, DAYS, MONTHS } from './calendar.component.constant';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  @ViewChild('drawer', { static: true }) drawer: MatDrawer;
  viewDate: any = new Date();
  selectedDate: any;
  employeeList: any = [];
  DAYS = DAYS;
  MONTHS = MONTHS;
  CALENDAR_DAYS = CALENDAR_DAYS;
  displayDate: any;
  selectedFilter: any;
  calendarDate: any;

  tiles: any = [];

  constructor() {
    this.initCalendar();
  }

  initCalendar() {
    let firstDay = new Date(new Date().getFullYear(), new Date().getMonth());
    firstDay = new Date(
      firstDay.setDate(firstDay.getDate() - firstDay.getDay())
    );
    let lastDay = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      0,
      23,
      59,
      59,
      999
    );
    lastDay = new Date(
      lastDay.setDate(lastDay.getDate() + 6 - lastDay.getDay())
    );
    this.generateCalendarGrid(firstDay);
    this.calendarDate =
      MONTHS[new Date().getMonth()] + ' ' + new Date().getFullYear();
  }

  generateCalendarGrid(firstDay: any, onLeaveDate?: any[]) {
    this.tiles = [];
    for (let i = 0; i < 35; i++) {
      let tileDate = new Date(firstDay.getTime() + i * SECONDS_PER_DAY);
      this.tiles.push({
        text: tileDate.getDate().toString(),
        cols: 2,
        rows: 1,
        // color: onLeaveDate?.includes(tileDate) ? 'lightblue' : 'lightgray';
        color: i == 5 || i == 6 || i == 7 || i == 8 ? 'lightblue' : 'lightgray',
        date: tileDate,
      });
      if (i == 17) {
        this.calendarDate =
          MONTHS[tileDate.getMonth()] + ' ' + tileDate.getFullYear();
      }
    }
  }

  getDisplayDate() {
    this.displayDate =
      DAYS[this.selectedDate.getDay()] +
      ' ' +
      this.selectedDate.getDate() +
      ' ' +
      MONTHS[this.selectedDate.getMonth()] +
      ' ' +
      this.selectedDate.getFullYear();
  }

  dayClicked($event: any) {
    if (this.selectedDate) {
      if ($event != this.selectedDate) {
        // this.templateService.get('employeeList').then(() => {})
        this.employeeList = ['songming', 'chewye'];
        for (let i = 0; i < 4; i++) {
          this.employeeList.push(...this.employeeList);
        }
        this.selectedDate = $event;
        this.getDisplayDate();
        // after get all data only toggle
        this.drawer.toggle();
        this.drawer.toggle();
      } else if ($event == this.selectedDate) {
        this.selectedDate = null;
        this.drawer.toggle();
      }
    } else {
      // this.templateService.get('employeeList').then(() => {})
      this.employeeList = ['songming', 'chewye'];
      for (let i = 0; i < 4; i++) {
        this.employeeList.push(...this.employeeList);
      }
      this.selectedDate = $event;
      this.getDisplayDate();
      this.drawer.toggle();
    }
  }

  onFilter() {}

  monthClicked($event: any) {
    let firstDay = new Date(this.tiles[0].date);
    let lastDay = new Date(this.tiles[this.tiles.length - 1].date);
    if ($event == 'previous') {
      firstDay = new Date(
        firstDay.getTime() -
          (firstDay.getDate() == 1 ? 35 : 28) * SECONDS_PER_DAY
      );
      this.generateCalendarGrid(firstDay);
    } else if ($event == 'today') {
      this.initCalendar();
    } else if ($event == 'next') {
      let newDay = new Date(lastDay.getTime() + SECONDS_PER_DAY);
      if (newDay.getDate() == 1) {
        let i = 1;
      } else {
      }
      firstDay = new Date(
        lastDay.getTime() +
          (new Date(lastDay.getTime() + SECONDS_PER_DAY).getDate() == 1
            ? 1
            : -6) *
            SECONDS_PER_DAY
      );
      this.generateCalendarGrid(firstDay);
    }
  }

  onEmployeeFilter($event: any) {}
}
