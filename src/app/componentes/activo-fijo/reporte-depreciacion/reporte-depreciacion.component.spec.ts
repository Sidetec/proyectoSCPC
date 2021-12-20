import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDepreciacionComponent } from './reporte-depreciacion.component';

describe('ReporteDepreciacionComponent', () => {
  let component: ReporteDepreciacionComponent;
  let fixture: ComponentFixture<ReporteDepreciacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteDepreciacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteDepreciacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
