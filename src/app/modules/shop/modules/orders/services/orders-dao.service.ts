import {Injectable} from '@angular/core';
import {StorageFields, StorageService} from '../../../../../services/storage.service';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Order, OrderStatus} from '../../../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderDaoService {

  constructor(private storage: StorageService) {
  }

  getAllOrders(): Observable<Array<Order>> {
    return this.storage.getItem<Array<Order>>(StorageFields.ORDERS)
      .pipe(switchMap((orders) => {
        if (Array.isArray(orders)) {
          return of(orders);
        }
        this.storage.setItem(StorageFields.ORDERS, []);
        return [];
      }));
  }

  updateOrderStatus(id: number, status: OrderStatus): Observable<boolean> {
    return this.getAllOrders()
      .pipe(
        switchMap(orders => {
          const indexToMinus = orders.findIndex(p => p.id === id);
          if (indexToMinus > -1) {
            orders[indexToMinus].status = status;
            this.storage.setItem(StorageFields.ORDERS, orders);
            return of(true);
          }
          return of(false);
        })
      );
  }

  createOrder(order: Order): Observable<Order> {
    return this.getLastOrderId()
      .pipe(
        switchMap((id) => {
          order.id = id;
          return of(order);
        }),
        switchMap(() => {
          return this.getAllOrders();
        }),
        switchMap((orders) => {
          orders.push(order);
          this.storage.setItem(StorageFields.ORDERS, orders);
          return of(order);
        })
      );
  }

  deleteOrder(id: number): Observable<Order> {
    return this.getAllOrders()
      .pipe(
        switchMap((orders) => {
          const indexToDelete = orders.findIndex(p => p.id === id);
          if (indexToDelete > -1) {
            const [deletedOrder] = orders.splice(indexToDelete, 1);
            this.storage.setItem(StorageFields.ORDERS, orders);
            return of(deletedOrder);
          }
          return of(null);
        })
      );
  }

  private getLastOrderId(): Observable<number> {
    return this.getAllOrders()
      .pipe(
        switchMap((orders) => {
          if (!Array.isArray(orders) || orders.length === 0) {
            return of(0);
          }
          return of(orders[orders.length - 1].id + 1);
        })
      );
  }
}
