import { Observable } from 'rxjs';
import { UserListView, User } from '../entities/User';

export interface IUserService {
  getUsers(): Observable<UserListView[]>;
  getUserById(id: string): Observable<User>;
}