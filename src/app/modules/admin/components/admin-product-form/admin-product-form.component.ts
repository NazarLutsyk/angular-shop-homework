import {Component, EventEmitter, Output} from '@angular/core';
import {Product} from '../../../shop/models/product';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent {

  @Output() onSubmit = new EventEmitter<Product>();

  processForm(value: Product) {
    this.onSubmit.emit(value);
  }

}
