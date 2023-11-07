import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoordinatorClassroomsComponent } from './coordinator-classrooms/coordinator-classrooms.component';
import { CoordinatorClassroomsRegisterComponent } from './coordinator-classrooms-register/coordinator-classrooms-register.component';
import { CoordinatorCoursesComponent } from './coordinator-courses/coordinator-courses.component';
import { CoordinatorCoursesRegisterComponent } from './coordinator-courses-register/coordinator-courses-register.component';
import { CoordinatorDisciplineComponent } from './coordinator-discipline/coordinator-discipline.component';
import { CoordinatorDisciplineRegisterComponent } from './coordinator-discipline-register/coordinator-discipline-register.component';
import { CoordinatorFirstScreenComponent } from './coordinator-first-screen/coordinator-first-screen.component';
import { CoordinatorLoginComponent } from './coordinator-login/coordinator-login.component';
import { CoordinatorSchedulesComponent } from './coordinator-schedules/coordinator-schedules.component';
import { CoordinatorTeacherComponent } from './coordinator-teacher/coordinator-teacher.component';
import { CoordinatorTeacherRegisterComponent } from './coordinator-teacher-register/coordinator-teacher-register.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';


const routes: Routes = [
    { path: 'classrooms', component: CoordinatorClassroomsComponent },
    { path: 'classroomsr', component: CoordinatorClassroomsRegisterComponent },
    { path: 'courses', component: CoordinatorCoursesComponent },
    { path: 'coursesr', component: CoordinatorCoursesRegisterComponent },
    { path: 'discipline', component: CoordinatorDisciplineComponent },
    { path: 'discipliner', component: CoordinatorDisciplineRegisterComponent },
    { path: 'coorfirstscreen', component: CoordinatorFirstScreenComponent },
    { path: 'login', component: CoordinatorLoginComponent },
    { path: 'schedules', component: CoordinatorSchedulesComponent },
    { path: 'teacher', component: CoordinatorTeacherComponent },
    { path: 'teacherr', component: CoordinatorTeacherRegisterComponent },
    { path: 'firstscreen', component: FirstScreenComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }