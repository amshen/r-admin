import { Observable } from 'rxjs';

export interface AdminUser {
  name: string;
  picture: string;
}

export abstract class AdminUserData {
  abstract getUsers(): Observable<AdminUser[]>;
}
