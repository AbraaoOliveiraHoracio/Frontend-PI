import { FirstScreenComponent } from './first-screen/first-screen.component';
import { CoordinatorTeacherRegisterComponent } from './coordinator-teacher-register/coordinator-teacher-register.component';
import { CoordinatorTeacherComponent } from './coordinator-teacher/coordinator-teacher.component';
import { CoordinatorSchedulesComponent } from './coordinator-schedules/coordinator-schedules.component';
import { CoordinatorLoginComponent } from './coordinator-login/coordinator-login.component';
import { CoordinatorFirstScreenComponent } from './coordinator-first-screen/coordinator-first-screen.component';
import { CoordinatorDisciplineRegisterComponent } from './coordinator-discipline-register/coordinator-discipline-register.component';
import { CoordinatorDisciplineComponent } from './coordinator-discipline/coordinator-discipline.component';
import { CoordinatorCoursesRegisterComponent } from './coordinator-courses-register/coordinator-courses-register.component';
import { CoordinatorCoursesComponent } from './coordinator-courses/coordinator-courses.component';
import { CoordinatorClassroomsRegisterComponent } from './coordinator-classrooms-register/coordinator-classrooms-register.component';
import { CoordinatorClassroomsComponent } from './coordinator-classrooms/coordinator-classrooms.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';


const routes: Routes = [
  { path: 'coordinator-classroms', component: CoordinatorClassroomsComponent },
  { path: 'CoordinatorClassroomsRegister', component: CoordinatorClassroomsRegisterComponent },
  { path: 'CoordinatorCourses', component: CoordinatorCoursesComponent },
  { path: 'CoordinatorCoursesRegister', component: CoordinatorCoursesRegisterComponent },
  { path: 'CoordinatorDiscipline', component: CoordinatorDisciplineComponent },
  { path: 'CoordinatorDisciplineRegister', component: CoordinatorDisciplineRegisterComponent },
  { path: '', component: CoordinatorFirstScreenComponent },
  { path: 'CoordinatorLogin', component: CoordinatorLoginComponent },
  { path: 'CoordinatorSchedules', component: CoordinatorSchedulesComponent },
  { path: 'CoordinatorTeacher', component: CoordinatorTeacherComponent },
  { path: 'CoordinatorTeacherRegister', component: CoordinatorTeacherRegisterComponent },
  { path: 'FirstScreen', component: FirstScreenComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
