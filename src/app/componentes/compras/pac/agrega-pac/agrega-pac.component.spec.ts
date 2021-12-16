import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaPacComponent } from './agrega-pac.component';

describe('AgregaPacComponent', () => {
  let component: AgregaPacComponent;
  let fixture: ComponentFixture<AgregaPacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregaPacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaPacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
