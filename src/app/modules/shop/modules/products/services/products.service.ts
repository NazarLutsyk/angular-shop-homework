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

  createProduct(product: Product): Observable<Product> {
    if (product.price >= 0 && product.name && product.count >= 0) {
      return this.productDao.createProduct(product);
    }
    return throwError('Invalid data!');
  }
}
