import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token, User} from './interfaces/auth.interfaces';
import { BehaviorSubject } from 'rxjs';

const AUTH_API = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usernameSubject = new BehaviorSubject<string>('');
  username$ = this.usernameSubject.asObservable();

  public isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    let headers_obj = new HttpHeaders().set("Authorization", "Basic " + btoa(`${username}:${password}`));
    const httpOptions = {
      headers: headers_obj
    };

    return this.http.post<Token>(`${AUTH_API}token`, null, httpOptions);
  }

  register(username: string, password: string) {
    let user: User = {username: username, password: password};
    return this.http.post(`${AUTH_API}users`, user);
  }
}
