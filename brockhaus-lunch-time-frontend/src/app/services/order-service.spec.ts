import { TestBed } from '@angular/core/testing';

import { OrderService } from './order-service';
import { Order } from '../models/model';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // xit('should be saved ok', () => {
  //   service.saveOrdersToLocalStore();
  //   const savedOrder =  localStorage.getItem('orders');
  //   const expectedOrder = '[{"id":1,"name":"Herr Müller","description":"Pizza","price":10.5,"paid":true,"time":"2017-02-03T08:38:04.449Z"},{"id":2,"name":"Frau Weber","description":"Obstsalat","price":9.2,"paid":true,"time":"2017-02-03T08:38:04.449Z"},{"id":3,"name":"Herr Schmidt","description":"Doenner","price":7.5,"paid":false,"time":"2017-02-03T08:38:04.449Z"}]';
  //   expect(savedOrder).toEqual(expectedOrder)
  // });

  // xit('should be saved and loaded ok', () => {
  //   const testOrders: Order[] = [
  //     {id: 1, name:"Herr Müller", description: 'Pizza', price: 10.5, paid: true, time: new Date('2017-02-03T08:38:04.449Z')},
  //     {id: 2, name:"Frau Weber", description: 'Obstsalat', price: 9.2, paid: true, time: new Date('2017-02-03T08:38:04.449Z')},
  //     {id: 3, name:"Herr Schmidt", description: 'Doenner', price: 7.5, paid: false, time: new Date('2017-02-03T08:38:04.449Z')}
  //   ]
  //   localStorage.setItem('orders', JSON.stringify(testOrders));

  //   const recievedOrders: Order[] = service.retrieveOrdersFromLocalStore();;
  //   const expectedOrder = '[{"id":1,"name":"Herr Müller","description":"Pizza","price":10.5,"paid":true,"time":"2017-02-03T08:38:04.449Z"},{"id":2,"name":"Frau Weber","description":"Obstsalat","price":9.2,"paid":true,"time":"2017-02-03T08:38:04.449Z"},{"id":3,"name":"Herr Schmidt","description":"Doenner","price":7.5,"paid":false,"time":"2017-02-03T08:38:04.449Z"}]';
  //   expect(recievedOrders).toEqual(JSON.parse(expectedOrder));
  // });

});
