import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, map, tap } from 'rxjs';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_USER = 'http://localhost:3030/users'; // /user/register - post , /user/login - post, /user/logout - get

  private user$$: BehaviorSubject<User | null>;
  public user$: Observable<User | null>;



  constructor(private http: HttpClient, private router: Router) {
    this.user$$ = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user$ = this.user$$.asObservable();

  }


  login(email: string, password: string) {

    return this.http
      .post<User>(`${this.API_USER}/login`, { email, password })
      .pipe(map((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.user$$.next(user);
        return user;
      }));
  }

  register(email: string, username: string, password: string) {
    return this.http
      .post<User>(`${this.API_USER}/register`, {
        email,
        username,
        password,
      })
      .pipe(map((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.user$$.next(user);
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('user');
    this.user$$.next(null);
    this.router.navigate(['/login']);
  }

  getUserInfo() {
    const user = this.user$$.value;
    return this.http
      .get<User>(`${this.API_USER}/${user?.username}`)
      .pipe(tap((user) => this.user$$.next(user)));
  }

}
