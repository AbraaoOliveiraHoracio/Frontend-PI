import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorTeacherVisualizeComponent } from './coordinator-teacher-visualize.component';

describe('CoordinatorTeacherVisualizeComponent', () => {
  let component: CoordinatorTeacherVisualizeComponent;
  let fixture: ComponentFixture<CoordinatorTeacherVisualizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatorTeacherVisualizeComponent]
    });
    fixture = TestBed.createComponent(CoordinatorTeacherVisualizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
