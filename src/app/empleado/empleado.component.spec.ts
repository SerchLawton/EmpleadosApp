import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empleado } from './empleado.component';

describe('EmpleadoComponent', () => {
  let component: Empleado;
  let fixture: ComponentFixture<Empleado>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Empleado]
    });
    fixture = TestBed.createComponent(Empleado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
