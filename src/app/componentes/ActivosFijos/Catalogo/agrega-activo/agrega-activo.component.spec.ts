import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaArticuloComponent } from './agrega-activo.component';

describe('AgregaActivoComponent', () => {
  let component: AgregaActivoComponent;
  let fixture: ComponentFixture<AgregaActivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregaActivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
