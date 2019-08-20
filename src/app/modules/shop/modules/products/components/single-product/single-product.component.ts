import {Component, Input} from '@angular/core';
import {Product} from '../../../../models/product';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {

  @Input() product: Product;

}
