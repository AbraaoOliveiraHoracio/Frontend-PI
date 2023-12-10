import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorCouserVisualizeComponent } from './coordinator-couser-visualize.component';

describe('CoordinatorCouserVisualizeComponent', () => {
  let component: CoordinatorCouserVisualizeComponent;
  let fixture: ComponentFixture<CoordinatorCouserVisualizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatorCouserVisualizeComponent]
    });
    fixture = TestBed.createComponent(CoordinatorCouserVisualizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
