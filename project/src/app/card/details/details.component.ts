import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Art } from 'src/app/types/art';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  post = {} as Art;

  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['postId'];

      this.apiService.getOneArt(id).subscribe((post) => {
        this.post = post;
      });
    });
  }

  onDelete(_id:string): void{
    this.apiService.onDelete(_id).subscribe(()=>{
      this.router.navigate(['/']);
    });
  }

}
