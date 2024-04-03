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
    if (form.invalid) {
      return;
    }
    const {title, artist, imageUrl, description} = form.value;

    this.apiService.createPost(title, artist, imageUrl, description).subscribe(()=>{
      this.router.navigate(['/'])
    })

  }
}



