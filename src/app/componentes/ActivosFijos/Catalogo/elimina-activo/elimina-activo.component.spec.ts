import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaActivoComponent } from './elimina-activo.component';

describe('EliminaActivoComponent', () => {
  let component: EliminaActivoComponent;
  let fixture: ComponentFixture<EliminaActivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminaActivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminaActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
