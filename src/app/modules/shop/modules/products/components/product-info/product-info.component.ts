import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../../services/products.service';
import {switchMap} from 'rxjs/operators';
import {Product} from '../../../../models/product';
import {CartService} from '../../../cart/services/cart.service';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  @ViewChild('count', {static: false}) count: NgModel;

  product: Product;
  message: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          const productID = +params.productID;
          return this.productsService.getProductById(productID);
        })
      )
      .subscribe((p) => {
        this.product = p;
      });
  }

  addToCart(product: Product, value: number) {
    console.log(this.count);
    const copy = {...product};
    copy.count = value;
    this.cartService.addProductToCart(copy).subscribe(() => {
      this.count.reset('');
      this.message = 'Product was added to cart!';
    });
  }
}
