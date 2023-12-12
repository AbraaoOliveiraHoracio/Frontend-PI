// Importe os módulos necessários
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassroomsRegister } from '../ClassroomsRegister';
import { CoursesRegister } from '../CoursesRegister';
import { DisciplineRegister } from '../DisciplineRegister';
import { TeacherRegister } from '../TeacherRegister';
// Certifique-se de importar o modelo adequado

// Importe os serviços necessários
import { ClassroomsRegisterService } from '../classrooms-register.service';
import { CoursesRegisterService } from '../courses-register.service';
import { DisciplineRegisterService } from '../discipline-register.service';
import { TeacherRegisterService } from '../teacher-register.service';

@Component({
  selector: 'app-coordinator-schedules',
  templateUrl: './coordinator-schedules.component.html',
  styleUrls: ['./coordinator-schedules.component.css']
})
export class CoordinatorSchedulesComponent  {
/*  // Defina variáveis para armazenar os dados
  classrooms: ClassroomsRegister[] = [];
  courses: CoursesRegister[] = [];
  disciplines: DisciplineRegister[] = [];
  teachers: TeacherRegister[] = [];
// Certifique-se de inicializar essa variável

  // Defina o FormGroup para o formulário de cadastro
  savedEvent: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private classroomsService: ClassroomsRegisterService,
    private coursesService: CoursesRegisterService,
    private disciplineService: DisciplineRegisterService,
    private teacherService: TeacherRegisterService
  ) {
    // Inicialize o FormGroup
    this.savedEvent = this.formBuilder.group({
      // Adicione campos conforme necessário
      classroomId: ['', Validators.required],
      courseId: ['', Validators.required],
      disciplineId: ['', Validators.required],
      teacherId: ['', Validators.required],
      periodId: ['', Validators.required], // Atualizado para 'periodId'
      time: ['', Validators.required], // Adicione validações conforme necessário
      day: ['', Validators.required], // Adicione validações conforme necessário
    });
  }

  ngOnInit(): void {
    // Carregue os dados necessários ao iniciar o componente
    this.loadClassrooms();
    this.loadCourses();
    this.loadDisciplines();
    this.loadTeachers();
    this.loadPeriods(); // Certifique-se de chamar o método para carregar os períodos
  }

  // Métodos para carregar dados de cada tabela
  loadClassrooms() {
    this.classroomsService.getClassrooms().subscribe({
      next: data => this.classrooms = data,
      error: error => console.error('Erro ao carregar salas de aula:', error)
    });
  }

  loadCourses() {
    this.coursesService.getCourses().subscribe({
      next: data => this.courses = data,
      error: error => console.error('Erro ao carregar cursos:', error)
    });
  }

  loadDisciplines() {
    this.disciplineService.getDisciplines().subscribe({
      next: data => this.disciplines = data,
      error: error => console.error('Erro ao carregar disciplinas:', error)
    });
  }

  loadTeachers() {
    this.teacherService.getTeacher().subscribe({
      next: data => this.teachers = data,
      error: error => console.error('Erro ao carregar professores:', error)
    });
  }

  loadPeriods() {
    // Lógica para carregar os períodos, utilize o serviço adequado
  }

  // Método para salvar um evento (pode ser uma aula, por exemplo)
  saveEvent() {
    if (this.savedEvent.valid) {
      // Lógica para salvar o evento, utilizando this.formGroupEvent.value
      console.log('Evento salvo com sucesso:', this.savedEvent.value);
      // Adicione a lógica necessária para salvar o evento no backend
      // Pode ser necessário chamar diferentes serviços dependendo do seu backend
    } else {
      console.error('Formulário de evento inválido. Certifique-se de preencher todos os campos corretamente.');
    }
  }*/
}
