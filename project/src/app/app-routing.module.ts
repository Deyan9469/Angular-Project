import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { HeaderComponent } from './header/header.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './card/details/details.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component: HeaderComponent,},
  {path:'comments', component: CommentComponent},
  {path:'details/:postId', component: DetailsComponent},
  {path:'create', component: CreateComponent},
  {path:'details/:postId/edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
