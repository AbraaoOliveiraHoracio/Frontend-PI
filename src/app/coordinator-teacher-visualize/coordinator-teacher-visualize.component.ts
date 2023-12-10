import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherRegister } from '../TeacherRegister';
import { TeacherRegisterService } from '../teacher-register.service';

@Component({
  selector: 'app-coordinator-teacher-visualize',
  templateUrl: './coordinator-teacher-visualize.component.html',
  styleUrls: ['./coordinator-teacher-visualize.component.css']
})
export class CoordinatorTeacherVisualizeComponent {
  teacherRegister: TeacherRegister[] = [];
  isEditing: boolean = false;
  formGroupClient: FormGroup;

  constructor(private formBuilder: FormBuilder, private teacherRegisterService: TeacherRegisterService) {
    this.formGroupClient = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // Add email with validation
      senha: ['', Validators.required], // Add senha with validation
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

  edit(teacherRegister: TeacherRegister) {
    this.formGroupClient.setValue(teacherRegister);
    this.isEditing = true;
  }

  delete(teacherRegister: TeacherRegister) {
    this.teacherRegisterService.delete(teacherRegister).subscribe({
      next: () => this.loadteacherRegister()
    });
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

  get senha() {
    return this.formGroupClient.get('senha');
  }
}
