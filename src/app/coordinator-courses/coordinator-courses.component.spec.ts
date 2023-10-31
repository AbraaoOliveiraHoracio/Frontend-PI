import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorCoursesComponent } from './coordinator-courses.component';

describe('CoordinatorCoursesComponent', () => {
  let component: CoordinatorCoursesComponent;
  let fixture: ComponentFixture<CoordinatorCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatorCoursesComponent]
    });
    fixture = TestBed.createComponent(CoordinatorCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
