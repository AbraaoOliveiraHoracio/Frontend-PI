import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorClassroomsVisualizeComponent } from './coordinator-classrooms-visualize.component';

describe('CoordinatorClassroomsVisualizeComponent', () => {
  let component: CoordinatorClassroomsVisualizeComponent;
  let fixture: ComponentFixture<CoordinatorClassroomsVisualizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatorClassroomsVisualizeComponent]
    });
    fixture = TestBed.createComponent(CoordinatorClassroomsVisualizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
