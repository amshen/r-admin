import { Observable } from 'rxjs';
import { AdminUser } from '../entities/AdminUser';

export interface IAdminUserService {
    getUsers(): Observable<AdminUser[]>;
  }