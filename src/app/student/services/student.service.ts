import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/core/models/student';
import { environment } from 'src/environments/environment';

@Injectable()
export class StudentService {

  private readonly studentPath: string = "/student"

  constructor(private _http: HttpClient) { }

    //getAll
    get(): Observable<Student[]> {
      return this._http.get<Student[]>(`${environment.apiBaseUrl}${this.studentPath}`);
    }

    //getById
    getStudentById(id: number): Observable<Student>{
      return this._http.get<Student>(`${environment.apiBaseUrl}${this.studentPath}/${id}`);
    } 

    //post
    createStudent(student: Student): Observable<Student>{
      return this._http.post<Student>(`${environment.apiBaseUrl}${this.studentPath}`, student);
    }

    //update
    updateStudent(student: Student): Observable<Student>{
      return this._http.put<Student>(`${environment.apiBaseUrl}${this.studentPath}`, student);
    }

    //delete
    deleteStudent(id: number): Observable<any>{
      return this._http.delete(`${environment.apiBaseUrl}${this.studentPath}/${id}`);
    }

}
