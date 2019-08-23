import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsModule} from './modules/products/products.module';
import {OrdersModule} from './modules/orders/orders.module';
import {CartModule} from './modules/cart/cart.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    OrdersModule,
    CartModule
  ],
  exports: [
    ProductsModule,
    OrdersModule,
    CartModule
  ]
})
export class ShopModule {
}
