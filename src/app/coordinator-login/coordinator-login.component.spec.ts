import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorLoginComponent } from './coordinator-login.component';

describe('CoordinatorLoginComponent', () => {
  let component: CoordinatorLoginComponent;
  let fixture: ComponentFixture<CoordinatorLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatorLoginComponent]
    });
    fixture = TestBed.createComponent(CoordinatorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
