import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthPageComponent} from './components/auth-page/auth-page.component';

const routes: Routes = [
  {
    path: 'auth/login',
    component: AuthPageComponent
  },
  {
    path: 'auth/register',
    component: AuthPageComponent
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
