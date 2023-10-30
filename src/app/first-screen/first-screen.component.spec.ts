import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstScreenComponent } from './first-screen.component';

describe('FirstScreenComponent', () => {
  let component: FirstScreenComponent;
  let fixture: ComponentFixture<FirstScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstScreenComponent]
    });
    fixture = TestBed.createComponent(FirstScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
