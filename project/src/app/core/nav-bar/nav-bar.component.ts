import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/types/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  
  user? : User | null;

  constructor(private userService: UserService, private router: Router) { 

    const user = this.userService.user$.subscribe(x => this.user = x )
  }


  get isLoggedIn(): boolean {
    return !!this.user
  }



  logout(): void {
    this.userService.logout()
  }
}
