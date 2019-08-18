import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthPageComponent} from './components/auth-page/auth-page.component';
import {AuthRoutingModule} from './auth-routing.module';
import {MaterialModule} from '../shared/material.module';
import {FormsModule} from '@angular/forms';
import {DialogModule} from '../shared/dialog/dialog.module';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [
    CommonModule,
    DialogModule,
    FormsModule,
    MaterialModule,
    AuthRoutingModule
  ],
  exports: []
})
export class AuthModule {
}
