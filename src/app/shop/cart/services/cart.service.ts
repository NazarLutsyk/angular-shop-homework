import {Injectable} from '@angular/core';
import {Product} from '../../products/models/Product';
import {ProductManagerService} from '../../services/product-manager.service';

// why if I set there providedIn: ShopModule I will get errors about that angular cannot provide this service?
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

  addProduct(product: Product, withCount: boolean = false): void {
    this.cart = this.productManager.addProduct(this.cart, product, withCount);
  }

  removeProduct(product: Product, all: boolean = false): void {
    this.cart = this.productManager.removeProduct(this.cart, product, all);
  }

  clear(): void {
    for (const product of this.cart) {
      this.removeProduct(product, true);
    }
  }

  get totalPrice(): number {
    return this.isCartEmpty
      ? this.cart.reduce((acc, p) => acc + (p.price * p.count), 0)
      : 0;
  }

  get totalCount(): number {
    return this.isCartEmpty
      ? this.cart.reduce((acc, p) => acc + p.count, 0)
      : 0;
  }

  private get isCartEmpty(): boolean {
    return this.cart && this.cart.length > 0;
  }
}
