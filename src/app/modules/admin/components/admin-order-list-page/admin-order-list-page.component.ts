import {Component, OnInit} from '@angular/core';
import {OrdersService} from '../../../shop/modules/orders/services/orders.service';
import {Order} from '../../../shop/models/order';

@Component({
  selector: 'app-admin-order-list-page',
  templateUrl: './admin-order-list-page.component.html',
  styleUrls: ['./admin-order-list-page.component.css']
})
export class AdminOrderListPageComponent implements OnInit {

  orders: Array<Order>;

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.ordersService.getAllOrders().subscribe(o => this.orders = o);
  }

  changeOrderStatus(order: Order) {
    this.ordersService.updateOrderStatus(order.id, order.status).subscribe(() => {
      this.loadOrders();
    });
  }

  deleteOrder(id: number) {
    this.ordersService.deleteOrder(id).subscribe(() => {
      this.loadOrders();
    });
  }
}
