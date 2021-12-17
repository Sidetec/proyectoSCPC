import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaArticuloComponent } from './elimina-articulo.component';

describe('EliminaArticuloComponent', () => {
  let component: EliminaArticuloComponent;
  let fixture: ComponentFixture<EliminaArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminaArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminaArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
