import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Product} from '../../../shop/models/product';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent {

  @ViewChild('form', {static: false}) form: NgForm;

  @Input() product: Product = {id: null, name: '', count: null, price: 0};
  @Output() onSubmit = new EventEmitter<Product>();

  processForm() {
    this.onSubmit.emit(this.product);
  }

  clearForm(): void {
    this.form.resetForm();
    this.product = {id: null, name: '', count: null, price: null};
  }

}
