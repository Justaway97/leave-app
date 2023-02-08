import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LeaveModalComponent } from '../main/leave-modal/leave-modal.component';
import { toolbarItems } from './home.component.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(protected dialog: MatDialog) {}
  toolbarItems = toolbarItems;
  userAction: any = 'main';

  action(event: any) {
    if (event == 'add_box') {
      const dialogRef = this.dialog.open(LeaveModalComponent, {
        maxHeight: '90vh',
        // width: '20%',
      });
      dialogRef.afterClosed().subscribe((event: any) => {
        // verify event is add only reload
        if (event.event == 'add') {
          window.location.reload();
        }
      });
    } else if (event == 'calendar_today') {
      this.userAction = 'calendar';
    } else if (event == 'My Leave Application') {
      this.userAction = 'main';
    }
  }
}
