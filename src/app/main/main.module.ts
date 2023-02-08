import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// template
import { TemplateModule } from '../template/template.module';

// angular material
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { MainComponent } from './main/main.component';
import { LeaveModalComponent } from './leave-modal/leave-modal.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    LoginComponent,
    MainComponent,
    LeaveModalComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    TemplateModule,
    MatGridListModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [MainComponent, CalendarComponent],
})
export class MainModule {}
