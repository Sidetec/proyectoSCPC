import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaSuc2Component } from './agrega-suc2.component';

describe('AgregaSuc2Component', () => {
  let component: AgregaSuc2Component;
  let fixture: ComponentFixture<AgregaSuc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaSuc2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaSuc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
