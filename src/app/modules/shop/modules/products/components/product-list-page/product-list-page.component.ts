import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent implements OnInit {

  products: Array<Product>;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe((p) => {
      this.products = p;
    });
  }

}
