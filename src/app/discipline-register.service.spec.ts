import { TestBed } from '@angular/core/testing';

import { DisciplineRegisterService } from './discipline-register.service';

describe('DisciplineRegisterService', () => {
  let service: DisciplineRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisciplineRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
