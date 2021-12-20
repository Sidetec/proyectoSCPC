import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaOcComponent } from './consulta-oc.component';

describe('ConsultaOcComponent', () => {
  let component: ConsultaOcComponent;
  let fixture: ComponentFixture<ConsultaOcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaOcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaOcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
