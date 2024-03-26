import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Router } from '@angular/router';

const API_USER = 'http://localhost:3030/users'

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  API = '/users';

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith(this.API)) {
      req = req.clone({
        url: req.url.replace(this.API, API_USER),
        withCredentials: true,
      })
    }


    return next.handle(req).pipe(
      catchError((err) => {
        if(err.status === 401){
          this.router.navigate(['/login']);
        }
        
        return [err];
      })
    );
  }
}
