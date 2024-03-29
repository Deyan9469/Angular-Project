import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Art } from 'src/app/types/art';
import { User } from 'src/app/types/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  posts: Art[] | null = [];
  user? : User | null;
  
  constructor(private api:ApiService, private userService: UserService){
    const user = this.userService.user$.subscribe(x => this.user = x )

  }

  get isLoggedIn(): boolean {
    return !!this.user
  }

  ngOnInit(): void {
    this.api.getAllArt().subscribe((posts) =>{
      this.posts = posts;
    });
  }

}
