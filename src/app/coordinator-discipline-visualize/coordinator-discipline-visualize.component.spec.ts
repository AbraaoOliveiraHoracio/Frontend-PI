import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorDisciplineVisualizeComponent } from './coordinator-discipline-visualize.component';

describe('CoordinatorDisciplineVisualizeComponent', () => {
  let component: CoordinatorDisciplineVisualizeComponent;
  let fixture: ComponentFixture<CoordinatorDisciplineVisualizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatorDisciplineVisualizeComponent]
    });
    fixture = TestBed.createComponent(CoordinatorDisciplineVisualizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
