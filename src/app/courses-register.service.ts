import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CoursesRegister } from './CoursesRegister';

@Injectable({
  providedIn: 'root'
})
export class CoursesRegisterService {
  url = 'http://localhost:8080/Course';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<CoursesRegister[]> {
    return this.http.get<CoursesRegister[]>(this.url);
  }

  getCoursesId(id: number): Observable<CoursesRegister> {
    return this.http.get<CoursesRegister>(`${this.url}/${id}`);
  }

  save(course: CoursesRegister): Observable<CoursesRegister> {
    return this.http.post<CoursesRegister>(this.url, course).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error during save operation:', error);
        return throwError('Error during save operation');
      })
    );
  }

  edit(course: CoursesRegister): Observable<CoursesRegister> {
    return this.http.put<CoursesRegister>(`${this.url}/${course.id}`, course).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error during edit operation:', error);
        return throwError('Error during edit operation');
      })
    );
  }

  delete(course: CoursesRegister): Observable<void> {
    return this.http.delete<void>(`${this.url}/${course.id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error during delete operation:', error);
        return throwError('Error during delete operation');
      })
    );
  }

  update(course: CoursesRegister): Observable<CoursesRegister> {
    return this.http.put<CoursesRegister>(`${this.url}/${course.id}`, course).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error during update operation:', error);
        return throwError('Error during update operation');
      })
    );
  }
}
