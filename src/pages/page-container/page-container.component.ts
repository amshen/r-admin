import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-page-container',
  styleUrls: ['page-container.component.scss'],
  template: `
    <ngx-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-layout>
  `,
})

// Page Container is has the menu thingy
export class PageContainerComponent {
  menu = MENU_ITEMS;
}
