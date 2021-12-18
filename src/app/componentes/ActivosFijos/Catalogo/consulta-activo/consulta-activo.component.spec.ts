import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaActivoComponent } from './consulta-activo.component';

describe('ConsultaActivoComponent', () => {
  let component: ConsultaActivoComponent;
  let fixture: ComponentFixture<ConsultaActivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaActivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
