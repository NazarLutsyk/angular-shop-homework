import {Injectable} from '@angular/core';
import {StorageFields, StorageService} from '../../../../../services/storage.service';
import {Product} from '../../../models/product';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartDaoService {

  constructor(private storage: StorageService) {
  }

  getAllProductsFromCart(): Observable<Array<Product>> {
    return this.storage.getItem<Array<Product>>(StorageFields.CART)
      .pipe(switchMap((products) => {
        if (Array.isArray(products)) {
          return of(products);
        }
        this.storage.setItem(StorageFields.CART, []);
        return [];
      }));
  }

  addProductToCart(product: Product): Observable<boolean> {
    return this.getAllProductsFromCart().pipe(
      switchMap((products) => {
        const productIndexInCart = products.findIndex(p => p.id === product.id);
        if (productIndexInCart > -1) {
          products.splice(productIndexInCart, 1, product);
        } else {
          products.push(product);
        }
        this.storage.setItem(StorageFields.CART, products);
        return of(true);
      })
    );
  }

  deleteProductFromCart(id: number): Observable<Product> {
    return this.getAllProductsFromCart()
      .pipe(
        switchMap((products) => {
          const indexToDelete = products.findIndex(p => p.id === id);
          if (indexToDelete > -1) {
            const [deletedProduct] = products.splice(indexToDelete, 1);
            this.storage.setItem(StorageFields.CART, products);
            return of(deletedProduct);
          }
          return of(null);
        })
      );
  }

  minusProductFromCart(id: number): Observable<boolean> {
    return this.getAllProductsFromCart()
      .pipe(
        switchMap((products) => {
          const indexToMinus = products.findIndex(p => p.id === id);
          if (indexToMinus > -1) {
            --products[indexToMinus].count;
            if (products[indexToMinus].count <= 0) {
              products.splice(indexToMinus, 1);
            }
            this.storage.setItem(StorageFields.CART, products);
            return of(true);
          }
          return of(false);
        })
      );
  }

  clearCart(): void {
    this.storage.removeItem(StorageFields.CART);
    this.storage.setItem(StorageFields.CART, []);
  }
}
