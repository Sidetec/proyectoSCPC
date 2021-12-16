import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaPacComponent } from './modifica-pac.component';

describe('ModificaPacComponent', () => {
  let component: ModificaPacComponent;
  let fixture: ComponentFixture<ModificaPacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaPacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaPacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
