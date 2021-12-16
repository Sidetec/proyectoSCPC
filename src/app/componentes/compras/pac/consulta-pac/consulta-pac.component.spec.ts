import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPacComponent } from './consulta-pac.component';

describe('ConsultaPacComponent', () => {
  let component: ConsultaPacComponent;
  let fixture: ComponentFixture<ConsultaPacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
