import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorSchedulesComponent } from './coordinator-schedules.component';

describe('CoordinatorSchedulesComponent', () => {
  let component: CoordinatorSchedulesComponent;
  let fixture: ComponentFixture<CoordinatorSchedulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatorSchedulesComponent]
    });
    fixture = TestBed.createComponent(CoordinatorSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
