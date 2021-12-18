import { ComponentFixture, TestBed } from '@angular/core/testing';
import { sucComponent } from './suc.component';

describe('MenusucComponent', () => {
  let component: sucComponent;
  let fixture: ComponentFixture<sucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ sucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(sucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
