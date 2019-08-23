import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticatedGuard} from '../../../auth/guards/authenticated.guard';
import {CartListPageComponent} from './components/cart-list-page/cart-list-page.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartListPageComponent,
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
export class CartRoutingModule {
}
