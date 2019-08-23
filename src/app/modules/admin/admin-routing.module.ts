import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminPageComponent} from './components/admin-page/admin-page.component';
import {AdminProductListPageComponent} from './components/admin-product-list-page/admin-product-list-page.component';
import {AdminProductManageComponent} from './components/admin-product-manage/admin-product-manage.component';
import {AdminOrderListPageComponent} from './components/admin-order-list-page/admin-order-list-page.component';
import {ProductResolverService} from '../shop/modules/products/resolvers/product-resolver.service';
import {RoleGuard} from '../auth/guards/role.guard';
import {AuthenticatedGuard} from '../auth/guards/authenticated.guard';
import {Roles} from '../auth/models/roles';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AuthenticatedGuard, RoleGuard],
    data: {expectedRoles: [Roles.ADMIN]},
    children: [
      {
        path: 'products',
        component: AdminProductListPageComponent
      },
      {
        path: 'products/add',
        component: AdminProductManageComponent
      },
      {
        path: 'products/edit/:productID',
        resolve: {
          product: ProductResolverService
        },
        component: AdminProductManageComponent
      },
      {
        path: 'orders',
        component: AdminOrderListPageComponent
      }
    ]
  }
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
export class AdminRoutingModule {
}
