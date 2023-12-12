import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesRegister } from '../CoursesRegister';
import { CoursesRegisterService } from '../courses-register.service';

@Component({
  selector: 'app-coordinator-couser-visualize',
  templateUrl: './coordinator-couser-visualize.component.html',
  styleUrls: ['./coordinator-couser-visualize.component.css']
})
export class CoordinatorCouserVisualizeComponent implements OnInit {

  CoursesRegister: CoursesRegister[] = [];
  isEditing: boolean = false;
  formGroupClient: FormGroup;

  constructor(private formBuilder: FormBuilder, private coursesRegisterService: CoursesRegisterService) {
    this.formGroupClient = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, this.validateSpecialCharacters]],
      size: ['', [Validators.required, this.invalidSize]],
      period: ['', [Validators.required, this.invalidPeriod]],
    });
  }

  ngOnInit(): void {
    this.loadCoursesRegister();
  }

  loadCoursesRegister() {
    this.coursesRegisterService.getCourses().subscribe({
      next: data => this.CoursesRegister = data
    });
  }

  save() {
    if (this.formGroupClient.valid) {
      if (this.isEditing) {
        this.coursesRegisterService.update(this.formGroupClient.value).subscribe({
          next: () => {
            console.log('Update successful');
            this.loadCoursesRegister();
            this.formGroupClient.reset();
            this.isEditing = false;
          },
          error: (error) => {
            console.error('Update error:', error);
          }
        });
      } else {
        this.coursesRegisterService.save(this.formGroupClient.value).subscribe({
          next: data => {
            console.log('Save successful', data);
            this.CoursesRegister.push(data);
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

  edit(coursesRegister: CoursesRegister) {
    this.coursesRegisterService.getCoursesId(coursesRegister.id).subscribe({
      next: data => {
        this.formGroupClient.patchValue(data);
        this.isEditing = true;
      },
      error: (error) => {
        console.error('Error fetching data for edit:', error);
      }
    });
  }
  
  delete(coursesRegister: CoursesRegister) {
    this.coursesRegisterService.delete(coursesRegister).subscribe({
      next: () => this.loadCoursesRegister()
    });
  }

  clear() {
    this.formGroupClient.reset();
    this.isEditing = false;
  }
  validateSpecialCharacters(control: AbstractControl): { [key: string]: any } | null {
    const regex = /^[a-zA-Z0-9 ]+$/;
    const valid = regex.test(control.value);
    return valid ? null : { 'invalidCharacters': true };
  }

  
  invalidPeriod(control: AbstractControl): { [key: string]: any } | null {
    const valid = control.value > 0; // Adicione sua lógica de validação específica para 'size'
    return valid ? null : { 'invalidPeriod': true };
  } 
  
  invalidSize(control: AbstractControl): { [key: string]: any } | null {
    const valid = control.value > 0; // Adicione sua lógica de validação específica para 'size'
    return valid ? null : { 'invalidSize': true };
  }

  get sizeErrorMessage() {
    const sizeControl = this.formGroupClient.get('size');
    if (sizeControl?.hasError('required')) {
      return 'O tamanho é obrigatório.';
    }
    if (sizeControl?.hasError('invalidSize')) {
      return 'O tamanho deve ser maior que zero.';
    }
    return '';
  }

  get periodErrorMessage() {
    const periodControl = this.formGroupClient.get('period');
    if (periodControl?.hasError('required')) {
      return 'O período é obrigatório.';
    }
    if (periodControl?.hasError('invalidPeriod')) {
      return 'O período deve ser maior que zero.';
    }
    return '';
  }
  get nameErrorMessage() {
    const nameControl = this.formGroupClient.get('name');
    if (nameControl?.hasError('required')) {
      return 'O nome do curso é obrigatório.';
    }    if (nameControl?.hasError('invalidCharacters')) {
      return 'O nome da curso não pode conter caracteres especiais.';
    }
    return '';
  }

  get name() {
    return this.formGroupClient.get('name');
  }

  get size() {
    return this.formGroupClient.get('size');
  }

  get period() {
    return this.formGroupClient.get('period');
  }
}
