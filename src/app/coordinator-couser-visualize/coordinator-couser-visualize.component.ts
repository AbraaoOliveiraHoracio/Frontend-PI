import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      name: ['', Validators.required],
      size: ['', Validators.required],
      period: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadCoursesRegister();
  }

  loadCoursesRegister() {
    this.coursesRegisterService.getCourses().subscribe({
      next: data => {
        this.CoursesRegister = data;
      }
    });
  }

  save() {
    if (this.formGroupClient.valid) {
      const formData = this.formGroupClient.value;

      if (this.isEditing) {
        this.coursesRegisterService.update(formData).subscribe({
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
        this.coursesRegisterService.save(formData).subscribe({
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
    this.formGroupClient.setValue(coursesRegister);
    this.isEditing = true;
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
