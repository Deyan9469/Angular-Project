import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Art } from 'src/app/types/art';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  art = {} as Art;

  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['postId'];

      this.apiService.getOneArt(id).subscribe((art) => {
        this.art = art;
      });
    });
  }

}
