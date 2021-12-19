import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarSucComponent } from './cancelar-suc.component';

describe('CancelarSucComponent', () => {
  let component: CancelarSucComponent;
  let fixture: ComponentFixture<CancelarSucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelarSucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarSucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
