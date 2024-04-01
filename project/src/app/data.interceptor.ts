import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable()
export class DataInterceptor implements HttpInterceptor {
  API_ART = 'http://localhost:3030/data/art';
  API = '/data';
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('accessToken')

    if (accessToken) {
      req = req.clone({
        setHeaders: {
          'X-Authorization': `${accessToken}`,
        },
      });
    }

    return next.handle(req).pipe(
      catchError((err) => {
        return [err];
      })
    );
  }
}

export const dataInterceptorProvider: Provider = {
  useClass: DataInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS,
};
