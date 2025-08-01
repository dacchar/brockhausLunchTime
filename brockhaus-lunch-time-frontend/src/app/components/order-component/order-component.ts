import { Component, inject } from '@angular/core';
import { OrderService } from '../../services/order-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../models/model';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-component',
  imports: [FormsModule, DatePipe, CommonModule],
  templateUrl: './order-component.html',
  styleUrl: './order-component.css'
})
export class OrderComponent {
  protected id!: number;
  protected order: Order = new Order(this.id, '', '', '', 0, false, '', new Date());

  private orderService = inject(OrderService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  
  ngOnInit(): void {
    if(this.route.snapshot.routeConfig!.path !== 'orders/add'){
      this.id = parseInt(this.route.snapshot.params['id'])
      this.orderService.retrieveOrder(this.id).subscribe(
        data => this.order = data
      )
    }
  }

  saveOrder(): void {
    if(this.route.snapshot.routeConfig!.path === 'orders/add'){
      this.orderService.createOrder(this.order).subscribe(
        data => { 
          this.router.navigate(["orders"]);
        }
      )
    } else {
      this.orderService.updateOrder(this.id, this.order).subscribe(
        data => { 
          this.router.navigate(["orders"]);
        }
      )
    }
  }

  cancel(): void {
    this.router.navigate(["orders"]);    
  }

}

