import { TestBed } from '@angular/core/testing';

import { FruitservicesService } from './fruitservices.service';

describe('FruitservicesService', () => {
  let service: FruitservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
