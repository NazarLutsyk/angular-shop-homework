import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../products/models/Product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  @Input() product: Product;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onMinusProduct = new EventEmitter<Product>();

  triggerMinusProduct(product: Product) {
    this.onMinusProduct.emit(product);
  }
}
