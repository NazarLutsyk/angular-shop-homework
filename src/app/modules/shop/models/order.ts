import {Product} from './product';

export enum OrderStatus {
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
  SUBMITTED = 'SUBMITTED'
}

export interface Order {
  id?: number;
  userId: number;
  products: Array<Product>;
  date: string;
  status: OrderStatus;
}
