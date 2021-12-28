import { TestBed } from '@angular/core/testing';

import { MantenimientoActivoFijoService } from './mantenimiento-activo-fijo.service';

describe('MantenimientoActivoFijoService', () => {
  let service: MantenimientoActivoFijoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MantenimientoActivoFijoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
