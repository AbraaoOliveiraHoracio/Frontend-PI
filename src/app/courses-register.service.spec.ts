import { TestBed } from '@angular/core/testing';

import { CoursesRegisterService } from './courses-register.service';

describe('CoursesRegisterService', () => {
  let service: CoursesRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
