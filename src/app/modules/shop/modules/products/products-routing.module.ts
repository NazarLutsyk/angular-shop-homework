import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductListPageComponent} from './components/product-list-page/product-list-page.component';
import {AuthenticatedGuard} from '../../../auth/guards/authenticated.guard';
import {ProductInfoComponent} from './components/product-info/product-info.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListPageComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'products/:productID',
    component: ProductInfoComponent,
    canActivate: [AuthenticatedGuard]
  },
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
export class ProductsRoutingModule {
}
