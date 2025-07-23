import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../../services/order-service';
import { Debt, Filter } from '../../models/model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-debt-component',
  imports: [FormsModule],
  templateUrl: './debt-component.html',
  styleUrl: './debt-component.css'
})
export class DebtComponent implements OnInit {

  debts: Debt[] = [];
  protected filter: Filter = new Filter('');

  private orderService = inject(OrderService);

  ngOnInit(): void {
    this.filterDebts();
  }

  filterDebts(): void {
    if(this.filter.buyerName.length !== 0) {
      this.orderService.retrieveDebts(this.filter.buyerName).subscribe(
          response => {
            this.debts = response;
          }
        )
    }
  }

}
