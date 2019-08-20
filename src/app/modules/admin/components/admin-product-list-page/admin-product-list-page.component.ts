import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../../shop/modules/products/services/products.service';
import {Product} from '../../../shop/models/product';

@Component({
  selector: 'app-admin-product-list-page',
  templateUrl: './admin-product-list-page.component.html',
  styleUrls: ['./admin-product-list-page.component.css']
})
export class AdminProductListPageComponent implements OnInit {

  products: Array<Product>;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe(p => this.products = p);
  }

}
