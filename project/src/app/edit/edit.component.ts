import { Component, OnInit } from '@angular/core';
import { Art } from '../types/art';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  posts = {} as Art;

  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['postId'];

      this.apiService.getOneArt(id).subscribe((artPost) => {
        this.posts = artPost;
      });
    })
  }
}
