import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
