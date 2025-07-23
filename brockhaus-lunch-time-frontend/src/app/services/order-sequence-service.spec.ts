import { TestBed } from '@angular/core/testing';

import { OrderSequenceService } from './order-sequence-service';

describe('OrderSequenceService', () => {
  let service: OrderSequenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderSequenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
