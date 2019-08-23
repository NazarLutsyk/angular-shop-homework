import {Component, ViewChild} from '@angular/core';
import {Product} from '../../../shop/models/product';
import {ProductsService} from '../../../shop/modules/products/services/products.service';
import {AlertType} from '../../../shared/dialog/models/alert-type';
import {AdminProductFormComponent} from '../admin-product-form/admin-product-form.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-product-manage',
  templateUrl: './admin-product-manage.component.html',
  styleUrls: ['./admin-product-manage.component.css']
})
export class AdminProductManageComponent {

  @ViewChild(AdminProductFormComponent, {static: false}) productForm: AdminProductFormComponent;

  product: Product;
  message: string;
  messageType: AlertType;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.data.subscribe(({product}) => {
      this.product = product;
    });
  }

  createProduct(product: Product) {
    this.productsService.createProduct(product).subscribe(
      (createdProduct) => {
        this.message = `${createdProduct.name} was created!`;
        this.messageType = 'ok';
        this.productForm.clearForm();
      },
      (err) => {
        this.message = err;
        this.messageType = 'danger';
      }
    );
  }

  updateProduct(product: Product) {
    this.productsService.updateProduct(product).subscribe(
      (updatedProduct) => {
        this.message = `${updatedProduct.name} was updated!`;
        this.messageType = 'ok';
      },
      (err) => {
        this.message = err;
        this.messageType = 'danger';
      }
    );
  }
}
