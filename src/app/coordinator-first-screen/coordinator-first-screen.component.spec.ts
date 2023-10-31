import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorFirstScreenComponent } from './coordinator-first-screen.component';

describe('CoordinatorFirstScreenComponent', () => {
  let component: CoordinatorFirstScreenComponent;
  let fixture: ComponentFixture<CoordinatorFirstScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatorFirstScreenComponent]
    });
    fixture = TestBed.createComponent(CoordinatorFirstScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
