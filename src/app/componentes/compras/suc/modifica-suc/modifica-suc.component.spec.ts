import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificasucComponent } from './modifica-suc.component';

describe('ModificasucComponent', () => {
  let component: ModificasucComponent;
  let fixture: ComponentFixture<ModificasucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificasucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificasucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
