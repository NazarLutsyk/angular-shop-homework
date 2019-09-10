import {Injectable} from '@angular/core';
import {StorageFields, StorageService} from '../../../../../services/storage.service';
import {Product} from '../../../models/product';
import {Observable, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductDaoService {

  constructor(private storage: StorageService) {
  }

  getAllProducts(): Observable<Array<Product>> {
    return this.storage.getItem<Array<Product>>(StorageFields.PRODUCTS)
      .pipe(switchMap((products) => {
        if (Array.isArray(products)) {
          return of(products);
        }
        this.storage.setItem(StorageFields.PRODUCTS, []);
        return [];
      }));
  }

  getProductById(id: number): Observable<Product> {
    return this.getAllProducts()
      .pipe(
        map(products => products.find(p => p.id === id))
      );
  }

  createProduct(product: Product): Observable<Product> {
    return this.getLastProductId()
      .pipe(
        // тут думаю, можно воспользоваться tap()
        switchMap((id) => {
          product.id = id;
          return of(product);
        }),
        switchMap(() => {
          return this.getAllProducts();
        }),
        switchMap((products) => {
          products.push(product);
          this.storage.setItem(StorageFields.PRODUCTS, products);
          return of(product);
        })
      );
  }

  deleteProduct(id: number): Observable<Product> {
    return this.getAllProducts()
      .pipe(
        switchMap((products) => {
          const indexToDelete = products.findIndex(p => p.id === id);
          if (indexToDelete > -1) {
            const [deletedProduct] = products.splice(indexToDelete, 1);
            this.storage.setItem(StorageFields.PRODUCTS, products);
            return of(deletedProduct);
          }
          return of(null);
        })
      );
  }

  updateProduct(id: number, overload: Product): Observable<Product> {
    return this.getAllProducts()
      .pipe(
        switchMap((products) => {
          const indexToDelete = products.findIndex(p => p.id === id);
          if (indexToDelete > -1) {
            products.splice(indexToDelete, 1, overload);
            this.storage.setItem(StorageFields.PRODUCTS, products);
            return of(overload);
          }
          return of(null);
        })
      );
  }


  private getLastProductId(): Observable<number> {
    return this.getAllProducts()
      .pipe(
        switchMap((products) => {
          if (!Array.isArray(products) || products.length === 0) {
            return of(0);
          }
          return of(products[products.length - 1].id + 1);
        })
      );
  }
}
