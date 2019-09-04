import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './modules/shared/material.module';
import {AuthModule} from './modules/auth/auth.module';
import {AdminModule} from './modules/admin/admin.module';
import {ShopModule} from './modules/shop/shop.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ResponseTimeService} from './interceptors/response-time.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ShopModule,
    AuthModule,
    AdminModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseTimeService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
