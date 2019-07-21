import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainRoutingModule } from './main-routing.module';
import { ShopModule } from './shop/shop.module';
import { AboutComponent } from './layout/components/about/about.component';
import { HoverDirective } from './core/directives/hover.directive';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HoverDirective,
  ],
  imports: [
    BrowserModule,
    MainRoutingModule,
    ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
