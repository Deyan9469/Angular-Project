import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { HeaderComponent } from './header/header.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component: HeaderComponent,},
  {path:'comments', component: CommentComponent},
  {path:'edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
