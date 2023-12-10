import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TeacherRegister } from './TeacherRegister';


@Injectable({
  providedIn: 'root'
})
export class TeacherRegisterService {

  url = 'http://localhost:8080/teacher';

  constructor(private http: HttpClient) {}
  
  getTeacher(): Observable<TeacherRegister[]> {
    return this.http.get<TeacherRegister[]>(this.url);
  }

  getTeacherId(id: number): Observable<TeacherRegister> {
    return this.http.get<TeacherRegister>(`${this.url}/${id}`);
  }

  save(TeacherRegister: TeacherRegister): Observable<TeacherRegister> {
    return this.http.post<TeacherRegister>(this.url, TeacherRegister);
  }

  edit(TeacherRegister: TeacherRegister): Observable<TeacherRegister> {
    return this.http.put<TeacherRegister>(`${this.url}/${TeacherRegister.id}`, TeacherRegister);
  }

  delete(TeacherRegister: TeacherRegister): Observable<void> {
    return this.http.delete<void>(`${this.url}/${TeacherRegister.id}`);
  }

  update(Teacher: TeacherRegister): Observable<TeacherRegister> {
    return this.http.put<TeacherRegister>(`${this.url}/${Teacher.id}`, Teacher).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error during update operation:', error);
        return throwError('Error during update operation');
      })
    );
  }

  
}
