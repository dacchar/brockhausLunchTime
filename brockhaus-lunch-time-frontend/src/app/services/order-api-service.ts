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
      const path = `${API_URL}/orders`
      return this.http.get<[Order]>(path);
    }

    retrieveOrder(id: number): Observable<Order> {
      let path = `${API_URL}/orders/${id}`
      return this.http.get<Order>(path);
    }

    createOrder(order: Order): Observable<Order> {
      const path = `${API_URL}/orders`;
      return this.http.post<Order>(path, order);
  }

  updateOrder(id: number, todo: Order): Observable<Order> {
    let path = `${API_URL}/orders/${id}`
    return this.http.put<Order>(path, todo);
  }

  deleteOrder(id: number): Observable<number> {
    let path = `${API_URL}/orders/${id}`
    return this.http.delete<number>(path);
  }

  retrieveDebts(buyerName: string): Observable<Debt[]> {
    let path = `${API_URL}/debts/${buyerName}`
    return this.http.get<Debt[]>(path);
  }
  
}
