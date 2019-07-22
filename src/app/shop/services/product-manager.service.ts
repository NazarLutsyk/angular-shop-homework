import {Injectable} from '@angular/core';
import {Product} from '../products/models/Product';

// why if I set there providedIn: ShopModule I will get errors about that angular cannot provide this service?
// Тут будет циклическая зависимость, так как модуль ShopModule используется также для регистрации
// компонентов, которые будут использовать этот сервис.
// Мы рассмотрим на воркшопе как этого можно избежать.
@Injectable({
  providedIn: 'root'
})
export class ProductManagerService {

  addProduct(arr: Product[] = [], product: Product, withCount: boolean = false): Product[] {
    const productIndex = this.getProductIndex(arr, product);
    if (productIndex > -1) {
      ++arr[productIndex].count;
    } else {
      if (!withCount) {
        product.count = 1;
      }
      arr.push(product);
    }
    return arr;
  }

  removeProduct(arr: Product[] = [], product: Product, all: boolean = false): Product[] {
    const productIndex = this.getProductIndex(arr, product);
    if (productIndex > -1) {
      if (arr[productIndex].count > 1 && !all) {
        --arr[productIndex].count;
      } else {
        arr.splice(productIndex, 1);
      }
    }
    return arr;
  }

  private getProductIndex(arr: Product[] = [], product: Product): number {
    return arr.findIndex(p => p.id === product.id);
  }
}
