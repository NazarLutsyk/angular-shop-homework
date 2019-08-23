import {Injectable} from '@angular/core';
import {StorageFields, StorageService} from '../../../services/storage.service';
import {User} from '../models/user';
import {iif, Observable, of, throwError} from 'rxjs';
import {AuthDaoService} from './auth-dao.service';
import {switchMap, tap} from 'rxjs/operators';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  principal: User;

  constructor(
    private storage: StorageService,
    private authDao: AuthDaoService,
    private router: Router
  ) {
  }

  register(user: User): Observable<User> {
    const createUser$ = this.authDao.createUser(user).pipe(tap(registered => {
      this.authenticate(registered);
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
          this.authenticate(foundedUser);
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
    this.storage.setItem(StorageFields.PRINCIPAL, null);
    this.router.navigate(['/']);
  }

  checkSession(): void {
    this.storage.getItem<User>(StorageFields.PRINCIPAL).subscribe((principal) => {
      this.principal = principal;
    });
  }

  private authenticate(user: User = null): void {
    this.storage.setItem(StorageFields.PRINCIPAL, user);
    this.principal = user;
  }
}
