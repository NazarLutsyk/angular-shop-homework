import {Injectable} from '@angular/core';
import {Product} from '../../products/models/Product';
import {ProductManagerService} from '../../helpers/services/product-manager.service';
import {ProductsService} from '../../products/services/products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Product[];

  constructor(private productManager: ProductManagerService) {
    this.cart = [];
  }

  getCart() {
    return this.cart;
  }

  addProduct(product: Product): void {
    this.cart = this.productManager.addProduct(this.cart, product);
  }

  removeProduct(product): void {
    this.cart = this.productManager.removeProduct(this.cart, product);
  }
}
