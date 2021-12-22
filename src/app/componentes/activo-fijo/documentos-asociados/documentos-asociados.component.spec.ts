import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosAsociadosComponent } from './documentos-asociados.component';

describe('DocumentosAsociadosComponent', () => {
  let component: DocumentosAsociadosComponent;
  let fixture: ComponentFixture<DocumentosAsociadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosAsociadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosAsociadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
