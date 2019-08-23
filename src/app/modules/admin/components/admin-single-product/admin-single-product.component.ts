import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../shop/models/product';

@Component({
  selector: 'app-admin-single-product',
  templateUrl: './admin-single-product.component.html',
  styleUrls: ['./admin-single-product.component.css']
})
export class AdminSingleProductComponent {

  @Input() product: Product;
  @Output() onDeleteProduct = new EventEmitter<number>();

  deleteProduct(product: Product) {
    this.onDeleteProduct.emit(product.id);
  }
}
