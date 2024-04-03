import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private apiService: ApiService, private router: Router) { }

  addPost(form: NgForm): void {
    let { title, artist, imageUrl, description } = form.value;

    title = title.trim();
    artist = artist.trim();
    imageUrl = imageUrl.trim();
    description = description.trim();
    if (form.invalid || this.isWhitespace(title)
      || this.isWhitespace(artist)
      || this.isWhitespace(imageUrl)
      || this.isWhitespace(description)) {
      return;
    }

    this.apiService.createPost(title, artist, imageUrl, description).subscribe(() => {
      this.router.navigate(['/'])
    })

  }

  isWhitespace(input: string): boolean {
    return input.trim().length === 0;
  }
}




