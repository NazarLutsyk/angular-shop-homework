import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './shop/products/components/product-list/product-list.component';
import { CartComponent } from './shop/cart/components/cart/cart.component';

const routes: Routes = [
  // Порядок объектов в массиве желательно прописывать от более специфического path
  // к менее специфическому
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// Обычно он называется AppRoutingModule
export class MainRoutingModule {}
