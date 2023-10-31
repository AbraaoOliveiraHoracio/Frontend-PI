import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorTeacherRegisterComponent } from './coordinator-teacher-register.component';

describe('CoordinatorTeacherRegisterComponent', () => {
  let component: CoordinatorTeacherRegisterComponent;
  let fixture: ComponentFixture<CoordinatorTeacherRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatorTeacherRegisterComponent]
    });
    fixture = TestBed.createComponent(CoordinatorTeacherRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
