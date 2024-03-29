import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Art } from './types/art';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_ART = 'http://localhost:3030/data/art';
  API_COMMENTS = 'http://localhost:3030/data/comments';

  constructor(private http: HttpClient) { }

  getAllArt() {

  }

  getOneArt() {

  }

  createPost(title: string, artist: string, imageUrl: string, description: string) {
    return this.http.post<Art>(this.API_ART, { title, artist, imageUrl, description });
  }
}
