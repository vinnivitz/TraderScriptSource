import { Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthState } from '../states/auth.state';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.store.selectSnapshot(AuthState.token);
    const tokenizedReq = req.clone({
      headers: req.headers.set('Authorization', `Token ${token}`)
    });
    return next.handle(tokenizedReq)
  }
}
