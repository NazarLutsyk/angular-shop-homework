import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminPageComponent} from './components/admin-page/admin-page.component';
import {AdminProductListPageComponent} from './components/admin-product-list-page/admin-product-list-page.component';
import {AdminProductFormComponent} from './components/admin-product-form/admin-product-form.component';
import {AdminOrderListPageComponent} from './components/admin-order-list-page/admin-order-list-page.component';
import {AdminProductManageComponent} from './components/admin-product-manage/admin-product-manage.component';
import {MaterialModule} from '../shared/material.module';
import {ProductsModule} from '../shop/modules/products/products.module';
import {FormsModule} from '@angular/forms';
import {DialogModule} from '../shared/dialog/dialog.module';

@NgModule({
  declarations: [
    AdminPageComponent,
    AdminProductListPageComponent,
    AdminProductFormComponent,
    AdminOrderListPageComponent,
    AdminProductManageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    DialogModule,
    ProductsModule,
    AdminRoutingModule,
  ]
})
export class AdminModule {
}
