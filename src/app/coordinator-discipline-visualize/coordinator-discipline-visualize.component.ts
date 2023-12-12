import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { DisciplineRegister } from '../DisciplineRegister';
import { DisciplineRegisterService } from '../discipline-register.service';

@Component({
  selector: 'app-coordinator-discipline-visualize',
  templateUrl: './coordinator-discipline-visualize.component.html',
  styleUrls: ['./coordinator-discipline-visualize.component.css']
})
export class CoordinatorDisciplineVisualizeComponent {
  disciplineRegister: DisciplineRegister[] = [];
  isEditing: boolean = false;
  formGroupClient: FormGroup;

  constructor(private formBuilder: FormBuilder, private disciplineRegisterService: DisciplineRegisterService) {
    this.formGroupClient = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, this.validateSpecialCharacters]],
    });
  }

  ngOnInit(): void {
    this.loadDisciplineRegister();
  }

  loadDisciplineRegister() {
    this.disciplineRegisterService.getDisciplines().subscribe({
      next: data => {
        this.disciplineRegister = data;
      }
    });
  }

  // Método de validação customizado para caracteres especiais
  validateSpecialCharacters(control: AbstractControl): { [key: string]: any } | null {
    const regex = /^[a-zA-Z0-9 ]+$/;
    const valid = regex.test(control.value);
    return valid ? null : { 'invalidCharacters': true };
  }

  save() {
    if (this.formGroupClient.valid) {
      const formData = this.formGroupClient.value;

      if (this.isEditing) {
        this.disciplineRegisterService.update(formData).subscribe({
          next: () => {
            console.log('Update successful');
            this.loadDisciplineRegister();
            this.formGroupClient.reset();
            this.isEditing = false;
          },
          error: (error) => {
            console.error('Update error:', error);
          }
        });
      } else {
        this.disciplineRegisterService.save(formData).subscribe({
          next: data => {
            console.log('Save successful', data);
            this.disciplineRegister.push(data);
            this.formGroupClient.reset();
          },
          error: (error) => {
            console.error('Save error:', error);
          }
        });
      }
    } else {
      console.error('Form is not valid');
    }
  }

  edit(disciplineRegister: DisciplineRegister) {
    this.formGroupClient.setValue(disciplineRegister);
    this.isEditing = true;
  }

  delete(disciplineRegister: DisciplineRegister) {
    this.disciplineRegisterService.delete(disciplineRegister).subscribe({
      next: () => this.loadDisciplineRegister()
    });
  }

  clear() {
    this.formGroupClient.reset();
    this.isEditing = false;
  }
  get nameErrorMessage() {
    const nameControl = this.formGroupClient.get('name');
    if (nameControl?.hasError('required')) {
      return 'O nome da disciplina é obrigatório.';
    }
    if (nameControl?.hasError('invalidCharacters')) {
      return 'O nome da disciplina não pode conter caracteres especiais.';
    }
    return '';
  }

  get name() {
    return this.formGroupClient.get('name');
  }
}
