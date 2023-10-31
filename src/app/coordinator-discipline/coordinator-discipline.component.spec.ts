import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorDisciplineComponent } from './coordinator-discipline.component';

describe('CoordinatorDisciplineComponent', () => {
  let component: CoordinatorDisciplineComponent;
  let fixture: ComponentFixture<CoordinatorDisciplineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatorDisciplineComponent]
    });
    fixture = TestBed.createComponent(CoordinatorDisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
