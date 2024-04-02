import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Art } from './types/art';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_ART = 'http://localhost:3030/data/art';

  constructor(private http: HttpClient) { }

  getAllArt() {
    return this.http.get<Art[]>(this.API_ART);
  }

  getOneArt(_id: string) {
    return this.http.get<Art>(`${this.API_ART}/${_id}`);

  }

  createPost(title: string, artist: string, imageUrl: string, description: string) {
    const payload = { title, artist, imageUrl, description }
    return this.http.post<Art>(this.API_ART, payload);
  }

  editPost(title: string, artist: string, imageUrl: string, description: string, _id: string) {
    const payload = { title, artist, description, imageUrl }

    return this.http.put<Art>(`${this.API_ART}/${_id}`, payload);
  }

  onDelete(_id:string){
    return this.http.delete(`${this.API_ART}/${_id}`);
  }
}
