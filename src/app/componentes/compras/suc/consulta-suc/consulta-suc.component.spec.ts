import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasucComponent } from './consulta-suc.component';

describe('ConsultasucComponent', () => {
  let component: ConsultasucComponent;
  let fixture: ComponentFixture<ConsultasucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
