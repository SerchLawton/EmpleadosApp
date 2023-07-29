import { TestBed } from '@angular/core/testing';

import { GuardarEmpleadoService } from './guardar-empleado.service';

describe('GuardarEmpleadoService', () => {
  let service: GuardarEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardarEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
