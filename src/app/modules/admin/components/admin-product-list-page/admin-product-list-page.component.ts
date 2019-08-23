import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../../shop/modules/products/services/products.service';
import {Product} from '../../../shop/models/product';
import {AlertService} from '../../../shared/dialog/service/alert.service';
import {ConfirmAlertComponent} from '../../../shared/dialog/components/confirm-alert/confirm-alert.component';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-admin-product-list-page',
  templateUrl: './admin-product-list-page.component.html',
  styleUrls: ['./admin-product-list-page.component.css']
})
export class AdminProductListPageComponent implements OnInit {

  products: Array<Product>;

  constructor(
    private productsService: ProductsService,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe(p => this.products = p);
  }

  deleteProduct(productId: number) {
    this.alertService.showSnackBarFromComponent(ConfirmAlertComponent, {
      message: 'Delete?'
    }).pipe(
      switchMap(() => {
        return this.productsService.deleteProduct(productId);
      })
    ).subscribe(
      (deleted) => {
        const deletedIndex = this.products.findIndex(p => p.id === deleted.id);
        this.products.splice(deletedIndex, 1);
      },
      (err) => {
        this.alertService.showSnackBar(err);
      }
    );
  }
}
