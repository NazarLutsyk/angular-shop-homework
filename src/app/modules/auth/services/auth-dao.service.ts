import {Injectable} from '@angular/core';
import {StorageFields, StorageService} from '../../../services/storage.service';
import {Observable, of} from 'rxjs';
import {User} from '../models/user';
import {switchMap} from 'rxjs/operators';
import {Roles} from '../models/roles';

@Injectable({
  providedIn: 'root'
})
export class AuthDaoService {

  constructor(private storage: StorageService) {
  }

  existsByLogin(login: string): Observable<boolean> {
    return this.getAllUsers()
      .pipe(
        switchMap((users) => {
          if (!users || users.length === 0) {
            return of(false);
          }
          return of(users.findIndex(u => u.login === login) > -1);
        })
      );
  }

  getAllUsers(): Observable<Array<User>> {
    return this.storage.getItem<Array<User>>(StorageFields.USERS)
      .pipe(switchMap((users) => {
        if (Array.isArray(users)) {
          return of(users);
        }
        this.storage.setItem(StorageFields.USERS, []);
        return [];
      }));
  }

  getUserById(id: number): Observable<User> {
    return this.getAllUsers().pipe(
      switchMap((users) => {
        return of(users.find(u => u.id === id));
      })
    );
  }


  getByCredentials(user: User): Observable<User | null> {
    return this.getAllUsers()
      .pipe(
        switchMap((users) => {
          if (!users || users.length === 0) {
            return of(null);
          }
          return of(users.find(u =>
            u.login === user.login
            && u.password === user.password
          ));
        })
      );
  }

  createUser(user: User): Observable<User> {
    return this.getLastUserId()
      .pipe(
        switchMap((id) => {
          user.id = id;
          user.role = Roles.USER;
          return of(user);
        }),
        switchMap(() => {
          return this.getAllUsers();
        }),
        switchMap((users) => {
          users.push(user);
          this.storage.setItem(StorageFields.USERS, users);
          return of(user);
        })
      );
  }

  private getLastUserId(): Observable<number> {
    return this.getAllUsers()
      .pipe(
        switchMap((users) => {
          if (!Array.isArray(users) || users.length === 0) {
            return of(0);
          }
          return of(users[users.length - 1].id + 1);
        })
      );
  }
}
