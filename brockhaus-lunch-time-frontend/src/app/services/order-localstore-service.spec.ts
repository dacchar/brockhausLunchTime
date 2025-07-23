import { TestBed } from '@angular/core/testing';

import { OrderLocalstoreService } from './order-localstore-service';

describe('OrderLocalstoreService', () => {
  let service: OrderLocalstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderLocalstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
