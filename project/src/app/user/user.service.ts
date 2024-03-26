import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, map, tap } from 'rxjs';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  API_USER = 'http://localhost:3030/users'; // /user/register - post , /user/login - post, /user/logout - get
  
  private user$$ = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
  private user$ = this.user$$.asObservable();
  
  user: User | undefined;
  USER_KEY = '[user]';
  
  userSubscription: Subscription;
  
  get isLogged(): boolean {
    return !!this.user;
  }
  
  constructor(private http: HttpClient, private router: Router) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });


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

  register(email: string, password: string, rePassword: string) {
    return this.http
      .post<User>(`${this.API_USER}/register`, {
        email,
        password,
        rePassword,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    localStorage.removeItem('user');
    this.user$$.next(null);
    this.router.navigate(['/login']);
  }

  getUserInfo() {
    return this.http
      .get<User>(`${this.API_USER}/${this.user?.email}`)
      .pipe(tap((user) => this.user$$.next(user)));
  }

  ngOnDestroy(): void {

    
  }
}
