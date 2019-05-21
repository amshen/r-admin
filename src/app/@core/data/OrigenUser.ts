import { Observable } from 'rxjs';

export interface OrigenUser {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  phoneNumer: string;
  kycPass: boolean;
}

export interface OrigenUserListView {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  kycPass: boolean;
}

export abstract class OrigenUserData {
  abstract getUsers(): Observable<OrigenUserListView[]>;
  abstract getUserById(id: string): Observable<OrigenUser>;
}
