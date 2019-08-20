import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListPageComponent} from './components/product-list-page/product-list-page.component';
import {SingleProductComponent} from './components/single-product/single-product.component';
import {ProductInfoComponent} from './components/product-info/product-info.component';
import {MaterialModule} from '../../../shared/material.module';

@NgModule({
  declarations: [
    ProductListPageComponent,
    SingleProductComponent,
    ProductInfoComponent,
  ],
  exports: [
    SingleProductComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ProductsModule {
}
