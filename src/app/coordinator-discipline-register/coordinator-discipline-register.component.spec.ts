// coordinator-discipline-register.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { CoordinatorDisciplineRegisterComponent } from './coordinator-discipline-register.component';
import { DisciplineRegisterService } from '../discipline-register.service';
import { of } from 'rxjs';

describe('CoordinatorDisciplineRegisterComponent', () => {
  let component: CoordinatorDisciplineRegisterComponent;
  let fixture: ComponentFixture<CoordinatorDisciplineRegisterComponent>;
  let disciplineRegisterService: jasmine.SpyObj<DisciplineRegisterService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('DisciplineRegisterService', ['save']);

    TestBed.configureTestingModule({
      declarations: [CoordinatorDisciplineRegisterComponent],
      providers: [
        FormBuilder,
        { provide: DisciplineRegisterService, useValue: spy }
      ]
    });

    fixture = TestBed.createComponent(CoordinatorDisciplineRegisterComponent);
    component = fixture.componentInstance;
    disciplineRegisterService = TestBed.inject(DisciplineRegisterService) as jasmine.SpyObj<DisciplineRegisterService>;
  });

  it('should call save() method when the form is valid', () => {
    // Arrange
    spyOnProperty(component.formGroupClient, 'valid').and.returnValue(true);
    disciplineRegisterService.save.and.returnValue(of({ id: 1, name: 'Valid Discipline Name' }));

    // Act
    component.save();

    // Assert
    expect(disciplineRegisterService.save).toHaveBeenCalledOnceWith(jasmine.any(Object));
  });
});
