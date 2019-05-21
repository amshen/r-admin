import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { OrigenUserData, OrigenUser, OrigenUserListView } from '../data/OrigenUser';

@Injectable()
export class OrigenUserService extends OrigenUserData {
  private time: Date = new Date;

  private users: OrigenUser[] = [
      {
        id: '111',
        username: 'amanda@gmail.com',
        firstName: 'Amanda',
        lastName: 'Shen',
        phoneNumer: '208-999-9090',
        kycPass: true,
      },
      {
        id: '112',
        username: 'shivaas@gmail.com',
        firstName: 'Shivaas',
        lastName: 'Gulati',
        phoneNumer: '208-333-9090',
        kycPass: false,
      },
      {
        id: '113',
        username: 'bayo@gmail.com',
        firstName: 'Bayo',
        lastName: 'Olatunji',
        phoneNumer: '208-333-4545',
        kycPass: false,
      },
      {
        id: '114',
        username: 'marvin@gmail.com',
        firstName: 'Marvin',
        lastName: 'Cheng',
        phoneNumer: '208-234-3333',
        kycPass: false,
      },
      {
        id: '115',
        username: 'tom@gmail.com',
        firstName: 'Tom',
        lastName: 'Lanhaus',
        phoneNumer: '208-234-2342',
        kycPass: true,
      },
      {
        id: '115',
        username: 'jeff@gmail.com',
        firstName: 'Jeff',
        lastName: 'Dzado',
        phoneNumer: '208-333-3333',
        kycPass: false,
      },
    ];

  getUsers(): Observable<OrigenUserListView[]> {
    const listView: OrigenUserListView[] = this.users.map(u => {
        return {
          id: u.id,
          username: u.username,
          firstName: u.firstName,
          lastName: u.lastName,
          kycPass: u.kycPass,
        };
      });
    return observableOf(listView);
  }

  getUserById(id: string): Observable<OrigenUser> {
    const user = this.users.find(u => u.id == id);
    return observableOf(user);
  }
}
