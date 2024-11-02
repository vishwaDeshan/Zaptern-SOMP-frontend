import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentListService {
  constructor(private http: HttpClient) {}

  getStudents(): Observable<any> {
    return this.http.get<string[]>('http://localhost:3000/students');
  }
}
