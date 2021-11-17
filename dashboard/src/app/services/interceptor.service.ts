import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Injectable, NgZone } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpErrorResponse
} from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ChartState } from '../states/chart.state';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(
    private store: Store,
    private router: Router,
    private ngZone: NgZone
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.store.selectSnapshot(ChartState.config)?.token;
    const tokenizedReq = req.clone({
      headers: req.headers.set('Authorization', `Token ${token}`)
    });
    return next.handle(tokenizedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        this.ngZone.run(() => this.router.navigateByUrl('login'));
        return throwError(error);
      })
    );
  }
}
