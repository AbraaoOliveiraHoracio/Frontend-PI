import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoordinatorFirstScreenComponent } from './coordinator-first-screen.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CoordinatorFirstScreenComponent', () => {
  let component: CoordinatorFirstScreenComponent;
  let fixture: ComponentFixture<CoordinatorFirstScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinatorFirstScreenComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(CoordinatorFirstScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a welcome message', () => {
    const welcomeMessage =
      fixture.nativeElement.querySelector('h2').textContent;
    expect(welcomeMessage).toContain('Seja bem-vindo(a) Leonardo');
  });

  it('should emit someEvent when emitEvent is called', () => {
    spyOn(component.someEvent, 'emit');
    component.emitEvent();
    expect(component.someEvent.emit).toHaveBeenCalled();
  });
});
