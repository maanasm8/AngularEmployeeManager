import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postEmployee(data: any) {
    console.log('POSTING');
    return this.http.post<any>('http://localhost:3000/employeeList/', data);
  }

  getEmployee() {
    return this.http.get<any>('http://localhost:3000/employeeList/');
  }
}
