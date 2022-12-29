import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interfaces/User';
import { UserDTO } from '../interfaces/UserDTO';

import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = environment.baseUrl;
  private apiUrl = `${this.baseUrl}/users`;

  constructor(private http: HttpClient) {}

  list(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(this.apiUrl);
  }

  create(data: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, JSON.stringify(data));
  }

  update(data: User): Observable<User> {
    return this.http.put<User>(
      `${this.apiUrl}/${data.id}`,
      JSON.stringify(data)
    );
  }

  delete(data: User): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/${data.id}`);
  }
}
