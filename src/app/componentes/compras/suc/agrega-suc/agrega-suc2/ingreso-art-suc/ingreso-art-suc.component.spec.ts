import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoArtSucComponent } from './ingreso-art-suc.component';

describe('IngresoArtSucComponent', () => {
  let component: IngresoArtSucComponent;
  let fixture: ComponentFixture<IngresoArtSucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoArtSucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoArtSucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
