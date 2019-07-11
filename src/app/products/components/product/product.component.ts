import { Component, Input } from '@angular/core';
import { Category } from '../../models/Category';
import { Product } from '../../models/Product';
import { CartService } from '../../../cart/services/cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;

  // how to avoid it? how i can use enum on template without creating this field?
  // Источником данных для шаблон есть свойство класса
  categorySwitch = Category;

  // Не стоит использовать тут зависимости.
  // Зависимости усложняют компоненты.
  constructor(
    private cartService: CartService,
    private productsService: ProductsService
  ) {}

  onBuy() {
    // Этот компонент получил данные от родителя
    // Не стоит тут использовать сервисы, можно просто сообщить
    // родителю, что надо сделать. В родительском компоненте уже есть одна зависимость.
    this.cartService.addProduct({ ...this.product });
    this.productsService.removeProduct(this.product);
    console.log(this.product.name, 'was bought');
  }
}
