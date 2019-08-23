import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Order, OrderStatus} from '../../../models/order';
import {OrderDaoService} from './orders-dao.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private orderDao: OrderDaoService) {
  }

  getAllOrders(): Observable<Array<Order>> {
    return this.orderDao.getAllOrders();
  }

  createOrder(order: Order): Observable<Order> {
    if (this.isOrderValid(order)) {
      return this.orderDao.createOrder(order);
    }
    return throwError('Invalid data!');
  }

  deleteOrder(orderId: number): Observable<Order> {
    if (orderId >= 0) {
      return this.orderDao.deleteOrder(orderId);
    }
    return throwError('Invalid data!');
  }

  updateOrderStatus(orderId: number, status: OrderStatus): Observable<boolean> {
    if (orderId >= 0) {
      return this.orderDao.updateOrderStatus(orderId, status);
    }
    return throwError('Invalid data!');
  }


  private isOrderValid(order: Order): boolean {
    return order.date && Array.isArray(order.products) && order.userId >= 0;
  }
}
