// coordinator-discipline-register.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DisciplineRegister } from '../DisciplineRegister';
import { DisciplineRegisterService } from '../discipline-register.service';

@Component({
  selector: 'app-coordinator-discipline-register',
  templateUrl: './coordinator-discipline-register.component.html',
  styleUrls: ['./coordinator-discipline-register.component.css']
})
export class CoordinatorDisciplineRegisterComponent implements OnInit {

  disciplineRegister: DisciplineRegister[] = [];
  isEditing: boolean = false;
  formGroupClient: FormGroup;

  constructor(private formBuilder: FormBuilder, private disciplineRegisterService: DisciplineRegisterService) {
    this.formGroupClient = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
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

  // ...

// ...

save() {
  if (this.formGroupClient.valid) {
    const formData = this.formGroupClient.value;

    if (this.isEditing) {
      // ... código de edição ...
    } else {
      // Remova a linha abaixo para permitir que o backend gere o ID automaticamente
      // delete formData.id;

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

  get name() {
    return this.formGroupClient.get('name');
  }
}
