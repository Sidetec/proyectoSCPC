import { TestBed } from '@angular/core/testing';

import { ComprasPacService } from './compras-pac.service';

describe('ComprasPacService', () => {
  let service: ComprasPacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComprasPacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
