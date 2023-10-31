import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorTeacherComponent } from './coordinator-teacher.component';

describe('CoordinatorTeacherComponent', () => {
  let component: CoordinatorTeacherComponent;
  let fixture: ComponentFixture<CoordinatorTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatorTeacherComponent]
    });
    fixture = TestBed.createComponent(CoordinatorTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
