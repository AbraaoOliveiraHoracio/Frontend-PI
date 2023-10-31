import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorCoursesRegisterComponent } from './coordinator-courses-register.component';

describe('CoordinatorCoursesRegisterComponent', () => {
  let component: CoordinatorCoursesRegisterComponent;
  let fixture: ComponentFixture<CoordinatorCoursesRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatorCoursesRegisterComponent]
    });
    fixture = TestBed.createComponent(CoordinatorCoursesRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
