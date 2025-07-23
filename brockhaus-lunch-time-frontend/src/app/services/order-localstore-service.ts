import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Debt, Order } from '../models/model';
import { OrderSequenceService } from './order-sequence-service';

@Injectable({
  providedIn: 'root'
})
export class OrderLocalstoreService {

    private orderSequenceService = inject(OrderSequenceService);

    private getOrdersFromLocalStore() : Order[] {
      let orders = localStorage.getItem('orders');
      if(orders) {
        return JSON.parse(orders)
      } else {
        return []
      }
    }

    retrieveOrders(): Observable<Order[]> {
      return of( this.getOrdersFromLocalStore() );
    }

    retrieveOrder(id: number): Observable<Order> {
      let orders: Order[] = this.getOrdersFromLocalStore();
      let order: Order | undefined = orders.find((o) => o.id === id);

      return ( order !== undefined ? of(order) : of() );
    }
  
    createOrder(order: Order): Observable<Order> {
      this.orderSequenceService.initOrderSequence();
      
      order.id = this.orderSequenceService.nextOrderSequence();
  
      let newOrders: Order[] = this.getOrdersFromLocalStore();
      newOrders.push(order);
  
      localStorage.setItem('orders', JSON.stringify(newOrders));
      
      return of(order);
    }
    
    updateOrder(id: number, order: Order): Observable<Order> {
      let orders: Order[] = this.getOrdersFromLocalStore();
      orders = orders.map((o) => (o.id === id ? { ...o, ...order } : o));
      localStorage.setItem('orders', JSON.stringify(orders));

      return of(order);
    }

    deleteOrder(id: number): Observable<number> {
      let orders: Order[] = this.getOrdersFromLocalStore();
      orders = orders.filter(order => order.id !== id);
      localStorage.setItem('orders', JSON.stringify(orders));
      return of(id);
    } 

    retrieveDebts(buyerName: string): Observable<Debt[]> {
        const orders = this.getOrdersFromLocalStore();
        let debtByOrderer = orders.reduce(function(res: { [id: string] : number; } , order: Order) {
          if( order.buyerName === buyerName && !order.paid) {
            if (!res[order.ordererName]) {
              res[order.ordererName] = 0
            }
            
            res[order.ordererName] += Number(order.price);
          }
          return res;
        }, {});
    
        let result: Debt[] = Object.keys(debtByOrderer).map(function(ordererName) {
          let debt = debtByOrderer[ordererName]
          return new Debt(ordererName, debt)
        })
    
        return of(result);
      }
 
 }