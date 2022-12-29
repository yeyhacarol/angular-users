import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interfaces/User';
import { UserDTO } from '../interfaces/UserDTO';

import { environment } from 'src/environments/environments';
import { ResponseProps } from '../interfaces/ResponseProps';

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

  create(data: User): Observable<ResponseProps> {
    return this.http.post<ResponseProps>(this.apiUrl, JSON.stringify(data));
  }

  update(data: User): Observable<ResponseProps> {
    return this.http.put<ResponseProps>(
      `${this.apiUrl}/${data.id}`,
      JSON.stringify(data)
    );
  }

  delete(data: User): Observable<ResponseProps> {
    return this.http.delete<ResponseProps>(`${this.apiUrl}/${data.id}`);
  }
}
