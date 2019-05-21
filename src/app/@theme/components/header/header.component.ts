import { Component, OnInit } from '@angular/core';

import { NbSidebarService } from '@nebular/theme';
import { AdminUserData, AdminUser } from '../../../@core/data/AdminUser';
import { OrigenUserListView } from '../../../@core/data/OrigenUser';
import { AnalyticsService } from '../../../@core/utils';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  user: AdminUser;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private adminUserService: AdminUserData,
              private analyticsService: AnalyticsService) {
  }

  ngOnInit() {
    this.adminUserService.getUsers()
      .subscribe((users: AdminUser[]) => this.user = users[0]);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');

    return false;
  }
  startSearch(): OrigenUserListView[] {
      this.analyticsService.trackEvent('startSearch');
      return null;
  }
}
