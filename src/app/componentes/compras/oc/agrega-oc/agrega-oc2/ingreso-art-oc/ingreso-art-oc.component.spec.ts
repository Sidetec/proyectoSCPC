import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoArtOcComponent } from './ingreso-art-oc.component';

describe('IngresoArtSucComponent', () => {
  let component: IngresoArtOcComponent;
  let fixture: ComponentFixture<IngresoArtOcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoArtOcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoArtOcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
