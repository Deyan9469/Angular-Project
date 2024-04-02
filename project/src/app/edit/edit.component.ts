import { Component, OnInit } from '@angular/core';
import { Art } from '../types/art';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  post = {} as Art;
  id: string = "";

  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      this.id = data['postId'];
      
      this.apiService.getOneArt(this.id).subscribe((artPost) => {
        this.post = artPost;
      });
    })
  }

  editPost(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { title, artist, imageUrl, description } = form.value;
 
    this.apiService.editPost(title, artist, imageUrl, description, this.post._id).subscribe(() => {
      this.router.navigate([`/details/${this.post._id}`]);
    })
  }
}
