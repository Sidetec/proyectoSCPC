import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaConsumoComponent } from './agrega-consumo.component';

describe('AgregaConsumoComponent', () => {
  let component: AgregaConsumoComponent;
  let fixture: ComponentFixture<AgregaConsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaConsumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
