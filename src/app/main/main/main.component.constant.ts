export const myComingLeaveHeaders = [
  { header: 'leave_type', type: 'label', text: 'Leave Type' },
  { header: 'from', type: 'label', text: 'From' },
  { header: 'to', type: 'label', text: 'To' },
  { header: 'approved_by', type: 'label', text: 'Approved By' },
  { header: 'remark', type: 'label', text: 'Remark' },
  { header: 'attachment', type: 'label', text: 'Attachment' },
  { header: 'menu', type: 'menu' },
];

export const myComingLeaveDataSource = [
  {
    leave_type: { value: null, optionRule: 'LEAVE_TYPE' },
    from: null,
    to: null,
    approved_by: null,
    remark: null,
    attachment: null,
    menu: {
      icon: 'more_vert',
      options: [{ name: 'cancel' }],
    },
  },
];

export const myPendingLeaveApprovalHeaders = [
  { header: 'leave_type', type: 'label', text: 'Leave Type' },
  { header: 'from', type: 'label', text: 'From' },
  { header: 'to', type: 'label', text: 'To' },
  { header: 'approver', type: 'label', text: 'Approver' },
  { header: 'remark', type: 'label', text: 'Remark' },
  { header: 'attachment', type: 'label', text: 'Attachment' },
  { header: 'menu', type: 'menu' },
];

export const myPendingLeaveApprovalDataSource = [
  {
    leave_type: { value: null, optionRule: 'LEAVE_TYPE' },
    from: null,
    to: null,
    approver: null,
    remark: null,
    attachment: null,
    menu: {
      icon: 'more_vert',
      options: [{ name: 'update' }, { name: 'cancel' }],
    },
  },
];

export const myLeaveHistoryHeaders = [
  { header: 'leave_type', type: 'label', text: 'Leave Type' },
  { header: 'from', type: 'label', text: 'From' },
  { header: 'to', type: 'label', text: 'To' },
  { header: 'approved_by', type: 'label', text: 'Approved By' },
  { header: 'remark', type: 'label', text: 'Remark' },
  { header: 'attachment', type: 'label', text: 'Attachment' },
];

export const myLeaveHistoryDataSource = [
  {
    leave_type: { value: null, optionRule: 'LEAVE_TYPE' },
    from: null,
    to: null,
    approved_by: null,
    remark: null,
    attachment: null,
  },
];
