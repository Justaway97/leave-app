export const toolbarItems = {
  left: [
    {
      display: 'text',
      type: 'text',
      text: 'My Leave Application',
    },
    // {
    //   display: 'icon',
    //   type: 'button',
    //   text: 'menu',
    //   options: [
    //     {
    //       name: 'abc',
    //       children: [{ name: 'xyz', children: [{ name: 'zzz' }] }],
    //     },
    //     { name: 'bcd', children: [{ name: 'xxx' }, { name: 'yyy' }] },
    //     { name: 'cde' },
    //   ],
    // },
  ],
  right: [
    {
      display: 'icon',
      type: 'button',
      text: 'calendar_today',
      tooltip: 'Organization Calendar',
    },
    {
      display: 'icon',
      type: 'button',
      text: 'add_box',
      tooltip: 'Apply for Leave',
      //   options: [
      //     {
      //       name: 'abc',
      //       children: [{ name: 'xyz', children: [{ name: 'zzz' }] }],
      //     },
      //     { name: 'bcd', children: [{ name: 'xxx' }, { name: 'yyy' }] },
      //     { name: 'cde' },
      //   ],
    },
    {
      display: 'icon',
      type: 'button',
      text: 'bug_report',
      tooltip: 'Report a Bug',
    },
    {
      display: 'icon',
      type: 'button',
      text: 'account_circle',
      options: [
        {
          name: 'Manage My Account',
          //   children: [{ name: 'xyz', children: [{ name: 'zzz' }] }],
        },
        // { name: 'bcd', children: [{ name: 'xxx' }, { name: 'yyy' }] },
        { name: 'Log Out' },
      ],
    },
  ],
};
