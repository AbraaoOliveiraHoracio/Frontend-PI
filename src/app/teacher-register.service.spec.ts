import { TestBed } from '@angular/core/testing';

import { TeacherRegisterService } from './teacher-register.service';

describe('TeacherRegisterService', () => {
  let service: TeacherRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
