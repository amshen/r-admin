import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  /**{
    title: 'Customer Info',
    link: '/pages/customer',
    icon: 'nb-person',
    children: [
      {
        title: 'Personal Info',
        link: '/auth/login',
      },
      {
        title: 'Deposits Account',
        link: '/auth/register',
      },
      {
        title: 'Transactions',
        link: '/auth/reset-password',
      },
      {
        title: 'Payment Instruments',
        link: '/auth/request-password',
      },
    ],
  },**/
];
