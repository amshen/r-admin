import { Component, OnInit } from '@angular/core';

import { NbSidebarService } from '@nebular/theme';
import { AdminUser } from '../../entities/AdminUser';
import { UserListView } from '../../entities/User';
import { AnalyticsService } from '../../services';
import { AdminUserService } from '../../services/mock';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {

  user: AdminUser;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private adminUserService: AdminUserService,
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
  startSearch(): UserListView[] {
      this.analyticsService.trackEvent('startSearch');
      return null;
  }
}
