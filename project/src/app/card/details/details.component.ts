import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Art } from 'src/app/types/art';
import { User } from 'src/app/types/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  post = {} as Art;
  user?: User | null;

  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute, private router: Router, private userService: UserService) {
    const user = this.userService.user$.subscribe(x => this.user = x)

  }

  get isLoggedIn(): boolean {
    return !!this.user
  }


  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['postId'];

      this.apiService.getOneArt(id).subscribe((post) => {
        this.post = post;

      });
    });
  }

  onDelete(_id: string): void {
    this.apiService.onDelete(_id).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  isAuth(post: Art) {
    const isAuth: boolean = post._ownerId === this.user?._id
    return isAuth
  }


}
