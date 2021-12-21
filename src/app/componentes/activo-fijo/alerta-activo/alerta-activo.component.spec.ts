import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaActivoComponent } from './alerta-activo.component';

describe('AlertaActivoComponent', () => {
  let component: AlertaActivoComponent;
  let fixture: ComponentFixture<AlertaActivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertaActivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertaActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
