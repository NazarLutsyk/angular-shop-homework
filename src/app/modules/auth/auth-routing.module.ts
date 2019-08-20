import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthPageComponent} from './components/auth-page/auth-page.component';
import {NonAuthenticatedGuard} from './guards/non-authenticated.guard';

const routes: Routes = [
  {
    path: 'auth/login',
    component: AuthPageComponent,
    canActivate: [NonAuthenticatedGuard]
  },
  {
    path: 'auth/register',
    component: AuthPageComponent,
    canActivate: [NonAuthenticatedGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {
}
