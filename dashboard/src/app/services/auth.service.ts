import { SignUp } from './../models/signup.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { defer, Observable } from 'rxjs';
import { SignIn } from '../models/signin.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly BASE_URL = 'http://localhost:8086/api/v2';

  constructor(private http: HttpClient) {}

  public get isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  public signUp(data: SignUp): Observable<any> {
    return defer(async () => {
      const x = this.http.get(`${this.BASE_URL}/setup`).toPromise();
      return;
    });
  }

  public signIn(data: SignIn): Observable<any> {
    return this.http.post(
      `${this.BASE_URL}/signin`,
      {},
      { headers: { Authorization: 'Basic ' + btoa('vinnivitz:12345678') } }
    );
  }
}
