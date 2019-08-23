import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartListPageComponent} from './components/cart-list-page/cart-list-page.component';
import {CartProductInfoComponent} from './components/cart-product-info/cart-product-info.component';
import {MaterialModule} from '../../../shared/material.module';
import {CartRoutingModule} from './cart-routing.module';

@NgModule({
  declarations: [CartListPageComponent, CartProductInfoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CartRoutingModule
  ]
})
export class CartModule {
}
