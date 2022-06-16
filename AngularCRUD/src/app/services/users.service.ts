import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/models/users';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  users_URL = 'https://jsonplaceholder.typicode.com/users';

  getUsers(): Observable<User> {
    const head = new HttpHeaders({
      'content-type': 'application/json',
    });

    return this.http.get<User>(this.users_URL, { headers: head });
  }
}
