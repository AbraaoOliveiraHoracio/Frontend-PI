import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorClassroomsRegisterComponent } from './coordinator-classrooms-register.component';

describe('CoordinatorClassroomsRegisterComponent', () => {
  let component: CoordinatorClassroomsRegisterComponent;
  let fixture: ComponentFixture<CoordinatorClassroomsRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatorClassroomsRegisterComponent]
    });
    fixture = TestBed.createComponent(CoordinatorClassroomsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
