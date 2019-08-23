import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Product} from '../../../../models/product';
import {AuthService} from '../../../../../auth/services/auth.service';
import {Order, OrderStatus} from '../../../../models/order';
import {OrdersService} from '../../../orders/services/orders.service';

@Component({
  selector: 'app-cart-list-page',
  templateUrl: './cart-list-page.component.html',
  styleUrls: ['./cart-list-page.component.css']
})
export class CartListPageComponent implements OnInit {

  products: Array<Product>;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private orderService: OrdersService
  ) {
  }

  ngOnInit() {
    this.getProductsFromCart();
  }

  getProductsFromCart() {
    this.cartService.getAllProductsFromCart().subscribe((products) => {
      this.products = products;
    });
  }

  deleteProductFromCart(id: number) {
    this.cartService.deleteProductFromCart(id).subscribe(() => {
      this.getProductsFromCart();
    });
  }

  minusProductFromCart(id: number) {
    this.cartService.minusProductFromCart(id).subscribe(() => {
      this.getProductsFromCart();
    });
  }

  createOrder() {
    const order: Order = {
      userId: this.authService.principal.id,
      date: (new Date()).toString(),
      status: OrderStatus.PENDING,
      products: this.products
    };
    this.orderService.createOrder(order).subscribe((o) => {
      if (o) {
        this.cartService.clearCart();
        this.products = [];
      }
    });
  }
}
