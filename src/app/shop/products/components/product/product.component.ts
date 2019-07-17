import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../models/Category';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() obBuy = new EventEmitter<Product>();

  categorySwitch = Category;

  triggerOnBuy() {
    this.obBuy.emit(this.product);
  }
}
