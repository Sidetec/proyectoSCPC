import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralizacionContableComponent } from './centralizacioncontable.component';

describe('CentralizacionContableComponent', () => {
  let component: CentralizacionContableComponent;
  let fixture: ComponentFixture<CentralizacionContableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralizacionContableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralizacionContableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
