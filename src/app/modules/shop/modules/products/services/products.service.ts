import {Injectable} from '@angular/core';
import {ProductDaoService} from './product-dao.service';
import {Observable, throwError} from 'rxjs';
import {Product} from '../../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private productDao: ProductDaoService) {
  }

  getAllProducts(): Observable<Array<Product>> {
    return this.productDao.getAllProducts();
  }

  getProductById(productId): Observable<Product> {
    return this.productDao.getProductById(productId);
  }

  createProduct(product: Product): Observable<Product> {
    if (this.isProductValid(product)) {
      return this.productDao.createProduct(product);
    }
    return throwError('Invalid data!');
  }

  updateProduct(product: Product): Observable<Product> {
    if (this.isProductValid(product)) {
      return this.productDao.updateProduct(product.id, product);
    }
    return throwError('Invalid data!');
  }

  deleteProduct(productId: number): Observable<Product> {
    if (productId >= 0) {
      return this.productDao.deleteProduct(productId);
    }
    return throwError('Invalid data!');
  }

  private isProductValid(product: Product): boolean {
    return product.price >= 0 && product.name && product.count >= 0;
  }
}
