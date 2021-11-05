import { SignUp } from './../models/signup.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { defer, Observable } from 'rxjs';
import { SignIn } from '../models/signin.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly BASE_URL = 'http://localhost:8086/api/v2';

  constructor(private http: HttpClient) {}

  public getUser(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/me`);
  }
}
