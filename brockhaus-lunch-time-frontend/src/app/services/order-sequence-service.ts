import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderSequenceService {

  private orderSequenceName = 'orderSequence';

  public initOrderSequence(): void {
    let orderSequence = localStorage.getItem(this.orderSequenceName);
    if(orderSequence === null) {
      localStorage.setItem(this.orderSequenceName, '1');
    }
  }

  public nextOrderSequence(): number {
    let id = Number( localStorage.getItem(this.orderSequenceName) );
    localStorage.setItem(this.orderSequenceName, JSON.stringify(++id));
    
    return id;
  }

}
