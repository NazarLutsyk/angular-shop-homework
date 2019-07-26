import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/Product';
import { CartService } from '../../../cart/services/cart.service';
import { OrderByPipe } from '../../../../shared/order-by.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private orderByPipe: OrderByPipe
  ) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  buyProduct(productToBuy: Product) {
    this.cartService.addProduct({ ...productToBuy });
    this.productService.removeProduct(productToBuy);
  }

  sortProducts(field: string, direction: boolean) {
    this.products = this.orderByPipe.transform(this.products, field, direction);
  }
}
