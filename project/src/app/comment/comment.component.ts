import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { Comment } from '../types/comment';
import { UserService } from '../user/user.service';
import { User } from '../types/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
  comments: Comment[] | null = []
  user? : User | null;


  constructor(private commentService: CommentService,private userService: UserService, private router:Router){
    const user = this.userService.user$.subscribe(x => this.user = x )

  }

  get lenght(): any{
    return this.comments?.length
  }

  get isLoggedIn(): boolean {
    return !!this.user
  }


  ngOnInit(): void {
    this.commentService.getAllComment().subscribe((comment)=>{
      this.comments = comment;
    })
  }

  addComment(form: NgForm): void{
    if (form.invalid) {
      return;
    }

    const {content} = form.value;
    const _ownerId = this.user?._id!;
    const username = this.user?.username!;

    this.commentService.createComment(content, username, _ownerId).subscribe(()=>{
      this.ngOnInit();
    });
  }

  onDelete(_id:string){
    return this.commentService.onDelete(_id).subscribe(()=>{
      this.ngOnInit();
    });
  }

}
