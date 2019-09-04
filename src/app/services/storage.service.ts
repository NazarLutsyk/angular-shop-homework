import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

export enum StorageFields {
  USERS = 'USERS',
  PRODUCTS = 'PRODUCTS',
  PRINCIPAL = 'PRINCIPAL',
  CART = 'CART',
  ORDERS = 'ORDERS',
  CONFIG = 'CONFIG',
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  localStorage: Storage = localStorage;

  clear(): void {
    this.localStorage.clear();
  }

  getItem<T>(key: StorageFields): Observable<T | null> {
    const itemJSON = this.localStorage.getItem(key);
    if (!itemJSON) {
      return of(null);
    }
    const item = JSON.parse(itemJSON) as T;
    return of(item);
  }

  key(index: number): Observable<string | null> {
    return of(this.localStorage.key(index));
  }

  removeItem(key: StorageFields): void {
    this.localStorage.removeItem(key);
  }

  setItem(key: StorageFields, value: any): void {
    this.localStorage.setItem(key, JSON.stringify(value));
  }

  length(): Observable<number> {
    return of(this.localStorage.length);
  }
}
