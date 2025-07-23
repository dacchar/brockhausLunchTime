import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { API_URL } from '../app.constants';
import { Debt, Order } from '../models/model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderApiService {

    private http = inject(HttpClient);
 
    retrieveOrders(): Observable<Order[]> {
      return of([]);
    }

    retrieveOrder(id: number): Observable<Order> {
      return of(new Order(0, '', '', '', 0, false, new Date()));
    }

    createOrder(order: Order): Observable<Order> {
      return of(new Order(0, '', '', '', 0, false, new Date()));
  }

  updateOrder(id: number, todo: Order): Observable<Order> {
    return of(new Order(0, '', '', '', 0, false, new Date()));
  }

  deleteOrder(id: number): Observable<number> {
    return of(0);
  }

  retrieveDebts(buyerName: string): Observable<Debt[]> {
    return of([]);
  }
  
}
