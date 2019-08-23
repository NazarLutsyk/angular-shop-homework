import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListPageComponent} from './components/product-list-page/product-list-page.component';
import {SingleProductComponent} from './components/single-product/single-product.component';
import {ProductInfoComponent} from './components/product-info/product-info.component';
import {MaterialModule} from '../../../shared/material.module';
import {ProductsRoutingModule} from './products-routing.module';
import {FormsModule} from '@angular/forms';
import {DialogModule} from '../../../shared/dialog/dialog.module';

@NgModule({
  declarations: [
    ProductListPageComponent,
    SingleProductComponent,
    ProductInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    MaterialModule,
    ProductsRoutingModule,
  ],
  exports: [
    SingleProductComponent
  ],
})
export class ProductsModule {
}
