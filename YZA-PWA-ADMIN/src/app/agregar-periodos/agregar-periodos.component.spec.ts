import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPeriodosComponent } from './agregar-periodos.component';

describe('AgregarPeriodosComponent', () => {
  let component: AgregarPeriodosComponent;
  let fixture: ComponentFixture<AgregarPeriodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPeriodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPeriodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
