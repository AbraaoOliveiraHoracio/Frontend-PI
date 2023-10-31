import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoordinatorLoginComponent } from './coordinator-login/coordinator-login.component';
import { CoordinatorFirstScreenComponent } from './coordinator-first-screen/coordinator-first-screen.component';

import { CoordinatorTeacherComponent } from './coordinator-teacher/coordinator-teacher.component';
import { CoordinatorDisciplineComponent } from './coordinator-discipline/coordinator-discipline.component';
import { CoordinatorClassroomsComponent } from './coordinator-classrooms/coordinator-classrooms.component';
import { CoordinatorSchedulesComponent } from './coordinator-schedules/coordinator-schedules.component';
import { CoordinatorCoursesComponent } from './coordinator-courses/coordinator-courses.component';
import { CoordinatorTeacherRegisterComponent } from './coordinator-teacher-register/coordinator-teacher-register.component';
import { CoordinatorDisciplineRegisterComponent } from './coordinator-discipline-register/coordinator-discipline-register.component';
import { CoordinatorCoursesRegisterComponent } from './coordinator-courses-register/coordinator-courses-register.component';
import { CoordinatorClassroomsRegisterComponent } from './coordinator-classrooms-register/coordinator-classrooms-register.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstScreenComponent,
    CoordinatorLoginComponent,
    CoordinatorFirstScreenComponent,
    CoordinatorTeacherComponent,
    CoordinatorDisciplineComponent,
    CoordinatorClassroomsComponent,
    CoordinatorSchedulesComponent,
    CoordinatorCoursesComponent,
    CoordinatorTeacherRegisterComponent,
    CoordinatorDisciplineRegisterComponent,
    CoordinatorCoursesRegisterComponent,
    CoordinatorClassroomsRegisterComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
