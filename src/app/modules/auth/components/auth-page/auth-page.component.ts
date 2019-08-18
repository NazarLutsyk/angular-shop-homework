import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  error: string;
  isLogin = false;
  isRegister = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    const url = this.activatedRoute.snapshot.url.join('/');
    this.isLogin = url.indexOf('login') > -1;
    this.isRegister = url.indexOf('register') > -1;
  }

  register(user: User): void {
    this.authService.register(user).subscribe(...this.handleAuth());
  }

  login(user: User): void {
    this.authService.login(user).subscribe(...this.handleAuth());
  }

  private handleAuth() {
    return [
      () => {
        this.router.navigate(['']);
      },
      (err) => {
        this.error = err;
      }
    ];
  }
}
