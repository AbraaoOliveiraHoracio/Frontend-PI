import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoordinatorLoginComponent } from './coordinator-login/coordinator-login.component';
import { CoordinatorFirstScreenComponent } from './coordinator-first-screen/coordinator-first-screen.component';

import { CoordinatorTeacherComponent } from './coordinator-teacher/coordinator-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstScreenComponent,
    CoordinatorLoginComponent,
    CoordinatorFirstScreenComponent,
    CoordinatorTeacherComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
