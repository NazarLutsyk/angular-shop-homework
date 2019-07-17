import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Product} from '../../../products/models/Product';
import {ProductsService} from '../../../products/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[];

  constructor(
    private cartService: CartService,
    private productService: ProductsService
  ) {
  }

  ngOnInit() {
    this.products = this.cartService.getCart();
  }

  minusProduct(product: Product) {
    this.cartService.removeProduct(product);
    this.productService.addProduct({...product});
  }

}
