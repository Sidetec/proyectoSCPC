import { TestBed } from '@angular/core/testing';

import { farmaciaService } from './farmacia.service';

describe('farmaciaService', () => {
  let service: farmaciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(farmaciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
