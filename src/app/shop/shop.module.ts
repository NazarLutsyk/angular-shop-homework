import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './products/product.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartModule,
    ProductModule,
    SharedModule
  ]
})
export class ShopModule {
}
