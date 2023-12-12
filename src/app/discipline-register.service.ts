import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DisciplineRegister } from './DisciplineRegister';

@Injectable({
  providedIn: 'root'
})
export class DisciplineRegisterService {

  url = 'http://localhost:8080/discipline'; // Ajuste a URL conforme necessário

  constructor(private http: HttpClient) {}
  
  getDisciplines(): Observable<DisciplineRegister[]> {
    return this.http.get<DisciplineRegister[]>(this.url);
  }

  getDisciplineId(id: number): Observable<DisciplineRegister> {
    return this.http.get<DisciplineRegister>(`${this.url}/${id}`);
  }

  // ...

save(discipline: DisciplineRegister): Observable<DisciplineRegister> {
  console.log('Calling save API with data:', discipline);
  return this.http.post<DisciplineRegister>(this.url, discipline).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Error during save operation:', error);
      return throwError('Error during save operation');
    })
  );
}

update(discipline: DisciplineRegister): Observable<DisciplineRegister> {
  console.log('Calling update API with data:', discipline);
  return this.http.put<DisciplineRegister>(`${this.url}/${discipline.id}`, discipline).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Error during update operation:', error);
      return throwError('Error during update operation');
    })
  );
}

// ...


  edit(discipline: DisciplineRegister): Observable<DisciplineRegister> {
    return this.http.put<DisciplineRegister>(`${this.url}/${discipline.id}`, discipline).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error during edit operation:', error);
        return throwError('Error during edit operation');
      })
    );
  }

  delete(discipline: DisciplineRegister): Observable<void> {
    return this.http.delete<void>(`${this.url}/${discipline.id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error during delete operation:', error);
        return throwError('Error during delete operation');
      })
    );
  }

}
