import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPacComponent } from './consulta-articulo.component';

describe('ConsultaArticuloComponent', () => {
  let component: ConsultaArticuloComponent;
  let fixture: ComponentFixture<ConsultaArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
