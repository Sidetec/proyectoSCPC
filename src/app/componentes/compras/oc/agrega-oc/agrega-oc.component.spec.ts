import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregasucComponent } from './agrega-suc.component';

describe('AgregasucComponent', () => {
  let component: AgregasucComponent;
  let fixture: ComponentFixture<AgregasucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregasucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregasucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
