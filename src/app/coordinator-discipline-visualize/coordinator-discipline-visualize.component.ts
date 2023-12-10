import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private DisciplineRegisterService: DisciplineRegisterService) {
    this.formGroupClient = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
     
    });
  }

  ngOnInit(): void {
    this.loadDisciplineRegister();
  }

  loadDisciplineRegister() {
    this.DisciplineRegisterService.getDisciplines().subscribe({
      next: data => {
        this.disciplineRegister = data;
      }
    });
  }

  save() {
    if (this.formGroupClient.valid) {
      const formData = this.formGroupClient.value;

      if (this.isEditing) {
        this.DisciplineRegisterService.update(formData).subscribe({
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
        this.DisciplineRegisterService.save(formData).subscribe({
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
    this.DisciplineRegisterService.delete(disciplineRegister).subscribe({
      next: () => this.loadDisciplineRegister()
    });
  }

  clear() {
    this.formGroupClient.reset();
    this.isEditing = false;
  }

  get name() {
    return this.formGroupClient.get('name');
  }

 
}
