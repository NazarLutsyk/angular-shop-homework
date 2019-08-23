import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Product} from '../../../models/product';
import {CartDaoService} from './cart-dao.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private cartDao: CartDaoService) {
  }

  getAllProductsFromCart(): Observable<Array<Product>> {
    return this.cartDao.getAllProductsFromCart();
  }

  addProductToCart(product: Product): Observable<boolean> {
    return this.cartDao.addProductToCart(product);
  }

  deleteProductFromCart(productId: number): Observable<Product> {
    if (productId >= 0) {
      return this.cartDao.deleteProductFromCart(productId);
    }
    return throwError('Invalid data!');
  }

  minusProductFromCart(productId: number): Observable<boolean> {
    if (productId >= 0) {
      return this.cartDao.minusProductFromCart(productId);
    }
    return throwError('Invalid data!');
  }

  clearCart() {
    this.cartDao.clearCart();
  }
}
