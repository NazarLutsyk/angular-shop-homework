import {Component} from '@angular/core';
import {Product} from '../../../shop/models/product';
import {ProductsService} from '../../../shop/modules/products/services/products.service';
import {AlertType} from '../../../shared/dialog/models/alert-type';

@Component({
  selector: 'app-admin-product-manage',
  templateUrl: './admin-product-manage.component.html',
  styleUrls: ['./admin-product-manage.component.css']
})
export class AdminProductManageComponent {

  message: string;
  messageType: AlertType;

  constructor(private productsService: ProductsService) {
  }

  createProduct(product: Product) {
    this.productsService.createProduct(product).subscribe(
      (createdProduct) => {
        this.message = `${createdProduct.name} was created!`;
        this.messageType = 'ok';
      },
      (err) => {
        this.message = err;
        this.messageType = 'danger';
      }
    );
  }
}
