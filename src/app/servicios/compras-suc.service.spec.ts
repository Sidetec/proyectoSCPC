import { TestBed } from '@angular/core/testing';

import { ComprasSucService } from './compras-suc.service';

describe('ComprasSucService', () => {
  let service: ComprasSucService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComprasSucService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
