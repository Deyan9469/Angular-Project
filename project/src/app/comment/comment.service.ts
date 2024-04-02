import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../types/comment';



@Injectable({
  providedIn: 'root'
})
export class CommentService {
  API_COMMENTS = 'http://localhost:3030/data/comments';

  constructor(private http: HttpClient) { }

  getAllComment() {
    return this.http.get<Comment[]>(this.API_COMMENTS);

  }

  createComment(content: string, username: string, _ownerId: string) {
    const payload = { content, username, _ownerId }
    return this.http.post<Comment[]>(this.API_COMMENTS, payload)
  }

  onDelete(_id:string){
    return this.http.delete(`${this.API_COMMENTS}/${_id}`);
  }
}
