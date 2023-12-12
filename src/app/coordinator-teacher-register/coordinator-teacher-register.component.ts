import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherRegister } from '../TeacherRegister';
import { TeacherRegisterService } from '../teacher-register.service';

@Component({
  selector: 'app-coordinator-teacher-register',
  templateUrl: './coordinator-teacher-register.component.html',
  styleUrls: ['./coordinator-teacher-register.component.css']
})
export class CoordinatorTeacherRegisterComponent implements OnInit {
  teacherRegister: TeacherRegister[] = [];
  isEditing: boolean = false;
  formGroupClient: FormGroup;

  constructor(private formBuilder: FormBuilder, private teacherRegisterService: TeacherRegisterService) {
    this.formGroupClient = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50),this.validateSpecialCharacters]],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    });
  }

  ngOnInit(): void {
    this.loadteacherRegister();
  }

  loadteacherRegister() {
    this.teacherRegisterService.getTeacher().subscribe({
      next: data => {
        this.teacherRegister = data;
      }
    });
  }

  save() {
    if (this.formGroupClient.valid) {
      const formData = this.formGroupClient.value;

      if (this.isEditing) {
        this.teacherRegisterService.update(formData).subscribe({
          next: () => {
            console.log('Update successful');
            this.loadteacherRegister();
            this.formGroupClient.reset();
            this.isEditing = false;
          },
          error: (error) => {
            console.error('Update error:', error);
          }
        });
      } else {
        this.teacherRegisterService.save(formData).subscribe({
          next: data => {
            console.log('Save successful', data);
            this.teacherRegister.push(data);
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

  validateSpecialCharacters(control: AbstractControl): { [key: string]: any } | null {
    const regex = /^[a-zA-Z0-9 ]+$/;
    const valid = regex.test(control.value);
    return valid ? null : { 'invalidCharacters': true };
  }
  get nameErrorMessage() {
    const nameControl = this.formGroupClient.get('name');
    if (nameControl?.hasError('invalidCharacters')) {
      return 'O nome do professor não pode conter caracteres especiais.';
    }
    return '';
  }

  clear() {
    this.formGroupClient.reset();
    this.isEditing = false;
  }

  get name() {
    return this.formGroupClient.get('name');
  }

  get email() {
    return this.formGroupClient.get('email');
  }

  get pass() {
    return this.formGroupClient.get('pass');
  }
}
