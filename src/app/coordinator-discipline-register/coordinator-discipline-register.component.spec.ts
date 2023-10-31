import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorDisciplineRegisterComponent } from './coordinator-discipline-register.component';

describe('CoordinatorDisciplineRegisterComponent', () => {
  let component: CoordinatorDisciplineRegisterComponent;
  let fixture: ComponentFixture<CoordinatorDisciplineRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatorDisciplineRegisterComponent]
    });
    fixture = TestBed.createComponent(CoordinatorDisciplineRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
