import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AdminUserData, AdminUser } from '../data/AdminUser';

@Injectable()
export class AdminUserService extends AdminUserData {

  private time: Date = new Date;

  private users: AdminUser[] = [
    { name: 'Nick Jones', picture: 'assets/images/nick.png' },
    { name: 'Eva Moor', picture: 'assets/images/eva.png' },
    { name: 'Jack Williams', picture: 'assets/images/jack.png' },
    { name: 'Lee Wong', picture: 'assets/images/lee.png' },
    { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
    { name: 'Kate Martinez', picture: 'assets/images/kate.png' }];

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }
}
