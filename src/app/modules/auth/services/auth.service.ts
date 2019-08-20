import {Injectable} from '@angular/core';
import {StorageService} from '../../../services/storage.service';
import {User} from '../models/user';
import {iif, Observable, of, throwError} from 'rxjs';
import {AuthDaoService} from './auth-dao.service';
import {switchMap, tap} from 'rxjs/operators';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // todo add session to localStorage
  principal: User;

  constructor(
    private storage: StorageService,
    private authDao: AuthDaoService
  ) {
  }

  register(user: User): Observable<User> {
    const createUser$ = this.authDao.createUser(user).pipe(tap(registered => {
      return this.principal = registered;
    }));
    return this.authDao
      .existsByLogin(user.login)
      .pipe(
        switchMap(
          exists => {
            return iif(
              () => exists,
              throwError('Already exists'),
              createUser$
            );
          })
      );
  }

  login(user: User): Observable<User> {
    return this.authDao.getByCredentials(user)
      .pipe(
        switchMap((foundedUser) => {
          this.principal = foundedUser;
          return iif(
            () => isNotNullOrUndefined(foundedUser),
            of(user),
            throwError('Wrong credentials!'),
          );
        })
      );
  }

  logout(): void {
    this.principal = null;
  }
}
