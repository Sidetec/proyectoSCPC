import { TestBed } from '@angular/core/testing';

import { ComprasRecepcionService } from './compras-recepcion.service';

describe('ComprasRecepcionService', () => {
  let service: ComprasRecepcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComprasRecepcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
