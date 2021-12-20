import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaArticuloComponent } from './modifica-articulo.component';

describe('ModificaArticuloComponent', () => {
  let component: ModificaArticuloComponent;
  let fixture: ComponentFixture<ModificaArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
