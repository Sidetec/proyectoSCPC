import { TestBed } from '@angular/core/testing';

import { ComprasOcService } from './compras-oc.service';

describe('ComprasOcService', () => {
  let service: ComprasOcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComprasOcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
