import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { User } from '../types/user';

@Injectable({ providedIn: 'root' })
export class AuthActivate implements CanActivate {
  user? : User | null;

  constructor(private userService: UserService) {
    const user = this.userService.user$.subscribe(x => this.user = x )

  }
  get isLoggedIn(): boolean {
    return !!this.user
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.isLoggedIn;
  }
}
