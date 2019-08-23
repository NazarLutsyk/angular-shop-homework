import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order, OrderStatus} from '../../../shop/models/order';
import {User} from '../../../auth/models/user';
import {AuthDaoService} from '../../../auth/services/auth-dao.service';

@Component({
  selector: 'app-admin-single-order',
  templateUrl: './admin-single-order.component.html',
  styleUrls: ['./admin-single-order.component.css']
})
export class AdminSingleOrderComponent implements OnInit {

  @Input() order: Order;

  @Output() onDeleteOrder = new EventEmitter<number>();
  @Output() onChangeOrderStatus = new EventEmitter<Order>();

  user: User;
  orderStatuses = OrderStatus;


  constructor(private usersDao: AuthDaoService) {
  }

  ngOnInit(): void {
    this.usersDao.getUserById(this.order.userId).subscribe(u => this.user = u);
  }

  deleteOrder(id: number) {
    this.onDeleteOrder.emit(id);
  }

  changeOrderStatus(status: OrderStatus) {
    const copy = {...this.order};
    copy.status = status;
    this.onChangeOrderStatus.emit(copy);
  }
}
