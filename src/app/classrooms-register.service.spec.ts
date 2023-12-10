import { TestBed } from '@angular/core/testing';

import { ClassroomsRegisterService } from './classrooms-register.service';

describe('ClassroomRegisterService', () => {
  let service: ClassroomsRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassroomsRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
