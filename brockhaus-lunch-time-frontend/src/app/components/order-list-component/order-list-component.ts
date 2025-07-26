import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../../services/order-service';
import { Order } from '../../models/model';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-list-component',
  imports: [DatePipe],
  templateUrl: './order-list-component.html',
  styleUrl: './order-list-component.css'
})
export class OrderListComponent implements OnInit {

  private orderService = inject(OrderService);
  private router = inject(Router);

  orders: Order[] = [];

  ngOnInit(): void {
      this.orderService.retrieveOrders().subscribe(
        response => {
          this.orders = response;
        }
      )
  }

  updateOrder(id: number): void {
    this.router.navigate(['orders', id]);
  }

  addOrder(): void {
    this.router.navigate(['orders/add']);
  }

  deleteOrder(id: number): void {
    this.orderService.deleteOrder(id).subscribe(
      response => {
        this.orderService.retrieveOrders().subscribe(
          data => {
            this.orders = data;
          }
        )
      }
    )
  }
}
