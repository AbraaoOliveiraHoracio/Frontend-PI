import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesRegister } from '../CoursesRegister';
import { CoursesRegisterService } from '../courses-register.service';

@Component({
  selector: 'app-coordinator-courses-register',
  templateUrl: './coordinator-courses-register.component.html',
  styleUrls: ['./coordinator-courses-register.component.css']
})
export class CoordinatorCoursesRegisterComponent implements OnInit {

  CoursesRegister: CoursesRegister[] = [];
  isEditing: boolean = false;

  formGroupClient: FormGroup;

  constructor(private formBuilder: FormBuilder, private coursesRegisterService: CoursesRegisterService) {
    this.formGroupClient = this.formBuilder.group({
      id: [''],
      name: [''],
      size: ['', Validators.required],
      period: ['', Validators.required],
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
