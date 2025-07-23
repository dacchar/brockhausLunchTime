import { inject, Injectable, numberAttribute } from '@angular/core';
import { Debt, Order } from '../models/model';
import { Observable } from 'rxjs';
import { API } from '../app.constants';
import { OrderApiService } from './order-api-service';
import { OrderLocalstoreService } from './order-localstore-service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderApiService = inject(OrderApiService);
  private orderLocalstoreService = inject(OrderLocalstoreService);

  retrieveOrders(): Observable<Order[]> {
     return API == 'LocalStore' ? this.orderLocalstoreService.retrieveOrders() : this.orderApiService.retrieveOrders();
  }

  retrieveOrder(id: number): Observable<Order> {
    return API == 'LocalStore' ? this.orderLocalstoreService.retrieveOrder(id) : this.orderApiService.retrieveOrder(id);
  }

  updateOrder(id: number, order: Order): Observable<Order> {
    return API == 'LocalStore' ? this.orderLocalstoreService.updateOrder(id, order) : this.orderApiService.updateOrder(id, order);
  }

  createOrder(order: Order): Observable<Order> {
    return API == 'LocalStore' ? this.orderLocalstoreService.createOrder(order) : this.orderApiService.createOrder(order);
  }

  deleteOrder(id: number): Observable<number> {
    return API == 'LocalStore' ? this.orderLocalstoreService.deleteOrder(id) : this.orderApiService.deleteOrder(id);
  } 

  retrieveDebts(buyerName: string): Observable<Debt[]> {
    return API == 'LocalStore' ? this.orderLocalstoreService.retrieveDebts(buyerName) : this.orderApiService.retrieveDebts(buyerName);
  }

}
