import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/Product';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  buyProduct(productToBuy: Product) {
    this.cartService.addProduct({ ...productToBuy });
    this.productService.removeProduct(productToBuy);
  }
}
