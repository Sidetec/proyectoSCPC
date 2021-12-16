import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListaSubMenuComponent } from './menu-lista-sub-menu.component';

describe('MenuListaSubMenuComponent', () => {
  let component: MenuListaSubMenuComponent;
  let fixture: ComponentFixture<MenuListaSubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuListaSubMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListaSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
