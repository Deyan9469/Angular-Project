import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../types/user';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  user? : User | null;
  isAuthenticating = true;

  constructor(private userService: UserService){}

  ngOnInit(): void {
        this.userService.user$.subscribe({
      next: () => {
        this.isAuthenticating = false;
      },
      error: () => {
        this.isAuthenticating = false;
      },
      complete: () => {
        this.isAuthenticating = false;
      },
    });
  }
}
