import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../../models/product';

@Component({
  selector: 'app-cart-product-info',
  templateUrl: './cart-product-info.component.html',
  styleUrls: ['./cart-product-info.component.css']
})
export class CartProductInfoComponent {

  @Input() product: Product;

  @Output() onDeleteProduct = new EventEmitter<number>();
  @Output() onMinusProduct = new EventEmitter<number>();

  deleteProduct(id: number) {
    this.onDeleteProduct.emit(id);
  }

  minusProduct(id: number) {
    this.onMinusProduct.emit(id);
  }
}
