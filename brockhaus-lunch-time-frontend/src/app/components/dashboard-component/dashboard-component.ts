import { Component } from '@angular/core';
import { OrderListComponent } from "../order-list-component/order-list-component";
import { DebtComponent } from "../debt-component/debt-component";

@Component({
  selector: 'app-dashboard-component',
  imports: [OrderListComponent, DebtComponent],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css'
})
export class DashboardComponent {

}
