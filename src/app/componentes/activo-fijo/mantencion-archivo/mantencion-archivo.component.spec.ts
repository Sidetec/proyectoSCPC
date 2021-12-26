import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantencionArchivoComponent } from './mantencion-archivo.component';

describe('MantencionArchivoComponent', () => {
  let component: MantencionArchivoComponent;
  let fixture: ComponentFixture<MantencionArchivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantencionArchivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantencionArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
