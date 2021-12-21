import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaActivoFijoComponent } from './consulta-activo-fijo.component';

describe('ConsultaActivoFijoComponent', () => {
  let component: ConsultaActivoFijoComponent;
  let fixture: ComponentFixture<ConsultaActivoFijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaActivoFijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaActivoFijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
