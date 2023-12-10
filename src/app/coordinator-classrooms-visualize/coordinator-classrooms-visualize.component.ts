import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassroomsRegister } from '../ClassroomsRegister';
import { ClassroomsRegisterService } from '../classrooms-register.service';

@Component({
  selector: 'app-coordinator-classrooms-visualize',
  templateUrl: './coordinator-classrooms-visualize.component.html',
  styleUrls: ['./coordinator-classrooms-visualize.component.css']
})
export class CoordinatorClassroomsVisualizeComponent {
  ClassroomsRegister: ClassroomsRegister[] = [];
  isEditing: boolean = false;
  formGroupClient: FormGroup;

  constructor(private formBuilder: FormBuilder, private classroomsRegisterService: ClassroomsRegisterService) {
    this.formGroupClient = formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      size: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      floor: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]],
    });
  }

  ngOnInit(): void {
    this.loadClassroomsRegister();
  }

  loadClassroomsRegister() {
    this.classroomsRegisterService.getClassrooms().subscribe({
      next: data => this.ClassroomsRegister = data,
      error: error => console.error('Erro ao carregar registros de salas de aula:', error)
    });
  }

  save() {
    if (this.formGroupClient.valid) {
      if (this.isEditing) {
        this.classroomsRegisterService.update(this.formGroupClient.value).subscribe({
          next: () => {
            console.log('Atualização bem-sucedida');
            this.loadClassroomsRegister();
            this.formGroupClient.reset();
            this.isEditing = false;
          },
          error: (error) => {
            console.error('Erro ao atualizar:', error);
          }
        });
      } else {
        this.classroomsRegisterService.save(this.formGroupClient.value).subscribe({
          next: data => {
            console.log('Registro salvo com sucesso:', data);
            this.ClassroomsRegister.push(data);
            this.formGroupClient.reset();
          },
          error: (error) => {
            console.error('Erro ao salvar:', error);
          }
        });
      }
    } else {
      this.markFormGroupTouched(this.formGroupClient);
      console.error('Formulário inválido. Certifique-se de preencher todos os campos corretamente.');
    }
  }
  
  // Marcar todos os controles do FormGroup como tocados para exibir mensagens de erro
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
  
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  

  edit(classroomsRegister: ClassroomsRegister) {
    this.formGroupClient.setValue(classroomsRegister);
    this.isEditing = true;
  }

  delete(classroomsRegister: ClassroomsRegister) {
    this.classroomsRegisterService.delete(classroomsRegister).subscribe({
      next: () => this.loadClassroomsRegister(),
      error: (error) => {
        console.error('Erro ao excluir:', error);
      }
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

  get floor() {
    return this.formGroupClient.get('floor');
  }
}
