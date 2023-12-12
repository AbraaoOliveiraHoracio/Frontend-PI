import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ClassroomsRegister } from '../ClassroomsRegister';
import { ClassroomsRegisterService } from '../classrooms-register.service';

@Component({
  selector: 'app-coordinator-classrooms-register',
  templateUrl: './coordinator-classrooms-register.component.html',
  styleUrls: ['./coordinator-classrooms-register.component.css']
})
export class CoordinatorClassroomsRegisterComponent implements OnInit {

  ClassroomsRegister: ClassroomsRegister[] = [];
  isEditing: boolean = false;
  formGroupClient: FormGroup;

  constructor(private formBuilder: FormBuilder, private classroomsRegisterService: ClassroomsRegisterService) {
    this.formGroupClient = formBuilder.group({
      id: [''],
      type: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50),this.validateSpecialCharacters]],
      size: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10),this.invalidSize]],
      floor: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5),this.invalidfloor]],
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
      console.log('Formulário válido. Salvando...');
  
      if (this.isEditing) {
        console.log('Editando...');
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
        console.log('Salvando novo registro...');
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
      console.error('Formulário inválido. Certifique-se de preencher todos os campos corretamente.');
    }
  }


  clear() {
    this.formGroupClient.reset();
    this.isEditing = false;
  }

  get type() {
    return this.formGroupClient.get('type');
  }

  get size() {
    return this.formGroupClient.get('size');
  }

  get floor() {
    return this.formGroupClient.get('floor');
  }

  validateSpecialCharacters(control: AbstractControl): { [key: string]: any } | null {
    const regex = /^[a-zA-Z0-9 ]+$/;
    const valid = regex.test(control.value);
    return valid ? null : { 'invalidCharacters': true };
  }

  invalidSize(control: AbstractControl): { [key: string]: any } | null {
    const valid = control.value > 0; // Adicione sua lógica de validação específica para 'size'
    return valid ? null : { 'invalidSize': true };
  }

  invalidfloor(control: AbstractControl): { [key: string]: any } | null {
    const valid = control.value > 0; // Adicione sua lógica de validação específica para 'size'
    return valid ? null : { 'invalidfloor': true };
  }
  
  
  get floorErrorMessage() {
    const floorControl = this.formGroupClient.get('floor');
    if (floorControl?.hasError('required')) {
      return 'O Andar é obrigatório.';
    }
    if (floorControl?.hasError('invalidfloor')) {
      return 'o andar deve ser maior que zero.';
    }
    return '';
  }
  get sizeErrorMessage() {
    const sizeControl = this.formGroupClient.get('size');
    if (sizeControl?.hasError('required')) {
      return 'O número máximo é obrigatório.';
    }
    if (sizeControl?.hasError('invalidSize')) {
      return 'O número máximo deve ser maior que zero.';
    }
    return '';
  }




  get typeErrorMessage() {
    const typeControl = this.formGroupClient.get('type');
    if (typeControl?.hasError('required')) {
      return 'O nome do sala/lab é obrigatório.';
    }    if (typeControl?.hasError('invalidCharacters')) {
      return 'O nome da sala/lab não pode conter caracteres especiais.';
    }
    return ''
}
}