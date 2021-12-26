import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/componentes/Farmacia/Arsenal/arsenal.component.spec.ts
import { ArsenalComponent } from './arsenal.component';

describe('ArsenalComponent', () => {
  let component: ArsenalComponent;
  let fixture: ComponentFixture<ArsenalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArsenalComponent ]
=======
import { AgregasucComponent } from './agrega-suc.component';

describe('AgregasucComponent', () => {
  let component: AgregasucComponent;
  let fixture: ComponentFixture<AgregasucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregasucComponent ]
>>>>>>> 52ff82e57a6130910fed29b4f8236eabc56e84b7:src/app/componentes/compras/oc/agrega-oc/agrega-oc.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD:src/app/componentes/Farmacia/Arsenal/arsenal.component.spec.ts
    fixture = TestBed.createComponent(ArsenalComponent);
=======
    fixture = TestBed.createComponent(AgregasucComponent);
>>>>>>> 52ff82e57a6130910fed29b4f8236eabc56e84b7:src/app/componentes/compras/oc/agrega-oc/agrega-oc.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
