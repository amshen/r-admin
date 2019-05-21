import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IAdminUserService } from '../interfaces/IAdminUserService';

@Injectable()
export class AdminUserService implements IAdminUserService {

  getUsers(): Observable<any> {
    return observableOf([]);
  }
}
