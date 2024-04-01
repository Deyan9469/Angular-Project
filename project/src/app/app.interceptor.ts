import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Router } from '@angular/router';

const API_USER = 'http://localhost:3030/users'

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  API = '/users';

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userDataString = localStorage.getItem('user');

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const accessToken = userData.accessToken;
      localStorage.setItem('accessToken', accessToken);

      if (req.url.startsWith(this.API)) {
        req = req.clone({
          url: req.url.replace(this.API, API_USER),
          withCredentials: true,
          setHeaders:{
            'Content-Type': 'application/json',
            'X-Authorization': `${accessToken}`,
          }
        })
      }

    }


    return next.handle(req).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.router.navigate(['/login']);
        }

        return [err];
      })
    );
  }
}

export const appInterceptorProvider: Provider = {
  useClass: AppInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS,
};
