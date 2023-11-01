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
    { path: '', component: CoordinatorClassroomsComponent },
    { path: '', component: CoordinatorClassroomsRegisterComponent },
    { path: '', component: CoordinatorCoursesComponent },
    { path: '', component: CoordinatorCoursesRegisterComponent },
    { path: '', component: CoordinatorDisciplineComponent },
    { path: '', component: CoordinatorDisciplineRegisterComponent },
    { path: '', component: CoordinatorFirstScreenComponent },
    { path: '', component: CoordinatorLoginComponent },
    { path: '', component: CoordinatorSchedulesComponent },
    { path: '', component: CoordinatorTeacherComponent },
    { path: '', component: CoordinatorTeacherRegisterComponent },
    { path: '', component: FirstScreenComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }