import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorClassroomsComponent } from './coordinator-classrooms.component';

describe('CoordinatorClassroomsComponent', () => {
  let component: CoordinatorClassroomsComponent;
  let fixture: ComponentFixture<CoordinatorClassroomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatorClassroomsComponent]
    });
    fixture = TestBed.createComponent(CoordinatorClassroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
