import {Injectable} from '@angular/core';
import {Product} from '../models/Product';
import {Category} from '../models/Category';
import {ProductManagerService} from '../../helpers/services/product-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[];

  constructor(private productManager: ProductManagerService) {
    this.products = [
      {
        id: 0,
        name: 'x',
        category: Category.PHONE,
        price: 1,
        count: 10
      },
      {
        id: 1,
        name: 'y',
        category: Category.FOOD,
        price: 2,
        count: 10
      },
      {
        id: 2,
        name: 'z',
        category: Category.CLOTH,
        price: 3,
        count: 10
      },
      {
        id: 3,
        name: 'f',
        category: 55555,
        price: 4,
        count: 10
      }
    ];
  }

  addProduct(product: Product): void {
    this.products = this.productManager.addProduct(this.products, product);
  }

  removeProduct(product): void {
    this.products = this.productManager.removeProduct(this.products, product);
  }


  getProducts(): Product[] {
    return this.products;
  }
}
