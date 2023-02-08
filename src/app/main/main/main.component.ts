import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CodeService } from 'src/app/template/services/code.service';
import { TemplateService } from 'src/app/template/services/template.service';
import { LeaveModalComponent } from '../leave-modal/leave-modal.component';
import {
  myComingLeaveHeaders,
  myLeaveHistoryHeaders,
  myPendingLeaveApprovalHeaders,
} from './main.component.constant';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  leaves: any = [];
  originalMyComingLeaveDataSource: any[];
  myComingLeaveDataSource: any[];
  myComingLeaveHeaders: any[];
  originalMyPendingLeaveApprovalDataSource: any[];
  myPendingLeaveApprovalDataSource: any[];
  myPendingLeaveApprovalHeaders: any[];
  OriginalMyLeaveHistoryHeaders: any[];
  myLeaveHistoryHeaders: any[];
  myLeaveHistoryDataSource: any[];

  constructor(
    protected templateService: TemplateService,
    public dialog: MatDialog,
    protected codeService: CodeService
  ) {
    if (!this.codeService.isDataRetrieve()) {
      this.codeService.getAllCodes();
    }
  }

  ngOnInit() {
    this.leaves = [];
    this.templateService.get('leave/summary').then((data: any) => {
      data.forEach((d: any) => {
        this.leaves.push(
          this.codeService
            .getCodeDescription(d.leave_type)
            .concat(': ')
            .concat(d.leave_balance)
            .concat(' Day(s)')
        );
      });
    });
    this.myComingLeaveHeaders = myComingLeaveHeaders;
    this.templateService.get('leave/coming').then((data) => {
      console.log(data);
    });
    let test: any = {
      leave_type: 'Annual Leave',
      from: '2023-01-10',
      from_time: 'a.m.',
      to: '2023-01-10',
      to_time: 'p.m.',
      approved_by: 'songming',
      remark: 'test',
      attachment: null,
      menu: {
        icon: 'more_vert',
        options: [{ name: 'update' }, { name: 'delete' }],
      },
    };
    this.myComingLeaveDataSource = [];
    this.originalMyComingLeaveDataSource = [];
    for (let i = 0; i < 40; i++) {
      this.myComingLeaveDataSource.push({
        ...JSON.parse(JSON.stringify(test)),
        remark: i.toString(),
        from: test.from + test.from_time ? ' (' + test.from_time + ')' : '',
        to: test.to + test.to_time ? ' (' + test.to_time + ')' : '',
      });
      this.originalMyComingLeaveDataSource.push({
        ...JSON.parse(JSON.stringify(test)),
        remark: i.toString(),
      });
    }
    // });
    // testing for pending approval
    this.myPendingLeaveApprovalHeaders = myPendingLeaveApprovalHeaders;
    let newtest: any = {
      leave_type: 'Annual Leave',
      from: '2023-01-10',
      from_time: 'a.m.',
      to: '2023-01-10',
      to_time: 'p.m.',
      approver: 'songming',
      remark: 'test',
      attachment: null,
      menu: {
        icon: 'more_vert',
        options: [{ name: 'update' }, { name: 'delete' }],
      },
    };
    this.myPendingLeaveApprovalDataSource = [];
    this.originalMyPendingLeaveApprovalDataSource = [];
    for (let i = 0; i < 40; i++) {
      this.myPendingLeaveApprovalDataSource.push({
        ...JSON.parse(JSON.stringify(newtest)),
        remark: i.toString().concat(i.toString()),
        from:
          newtest.from + newtest.from_time
            ? ' (' + newtest.from_time + ')'
            : '',
        to: newtest.to + newtest.to_time ? ' (' + newtest.toTime + ')' : '',
      });
      this.originalMyPendingLeaveApprovalDataSource.push({
        ...JSON.parse(JSON.stringify(newtest)),
        remark: i.toString(),
      });
    }
    // leave history
    this.myLeaveHistoryHeaders = myLeaveHistoryHeaders;
    let newtest2 = {
      leave_type: 'Annual Leave',
      from: '2023-01-10',
      from_time: 'a.m.',
      to: '2023-01-10',
      to_time: 'p.m.',
      approved_by: 'songming',
      remark: 'test',
      attachment: null,
      menu: {
        icon: 'more_vert',
        options: [{ name: 'update' }, { name: 'delete' }],
      },
    };
    this.myLeaveHistoryDataSource = [];
    for (let i = 0; i < 40; i++) {
      this.myLeaveHistoryDataSource.push({
        ...JSON.parse(JSON.stringify(newtest2)),
        remark: i.toString(),
        from:
          newtest2.from + newtest2.from_time
            ? ' (' + newtest2.from_time + ')'
            : '',
        to: newtest2.to + newtest2.to_time ? ' (' + newtest2.to_time + ')' : '',
      });
    }
  }

  onMenuSelect($event: any, selectedSource: any) {
    if ($event.$event == 'update') {
      const dialogRef = this.dialog.open(LeaveModalComponent, {
        maxHeight: '90vh',
        // width: '20%',
        data: { data: selectedSource[$event.index] },
      });
      // dialogRef.afterClosed().subscribe((event: any) => {
      //   // verify event is add only reload
      //   window.location.reload();
      // });
    }
  }
}
