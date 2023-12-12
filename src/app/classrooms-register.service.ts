import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassroomsRegister } from './ClassroomsRegister';

@Injectable({
  providedIn: 'root'
})
export class ClassroomsRegisterService {
  checkIfNameExists(name: any) {
    throw new Error('Method not implemented.');
  }
  url = 'http://localhost:8080/classroom';

  constructor(private http: HttpClient) {}
  
  getClassrooms(): Observable<ClassroomsRegister[]> {
    return this.http.get<ClassroomsRegister[]>(this.url);
  }

  getClassroomsId(id: number): Observable<ClassroomsRegister> {
    return this.http.get<ClassroomsRegister>(`${this.url}/${id}`);
  }

  save(ClassroomsRegister: ClassroomsRegister): Observable<ClassroomsRegister> {
    return this.http.post<ClassroomsRegister>(this.url, ClassroomsRegister);
  }

  edit(ClassroomsRegister: ClassroomsRegister): Observable<ClassroomsRegister> {
    return this.http.put<ClassroomsRegister>(`${this.url}/${ClassroomsRegister.id}`, ClassroomsRegister);
  }

  delete(ClassroomsRegister: ClassroomsRegister): Observable<void> {
    return this.http.delete<void>(`${this.url}/${ClassroomsRegister.id}`);
  }
  update(ClassroomsRegister: ClassroomsRegister): Observable<ClassroomsRegister>{
    return this.http.put<ClassroomsRegister>(`${this.url}/${ClassroomsRegister.id}`, ClassroomsRegister);
  }
}
