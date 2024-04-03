import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthNotActivate } from '../guards/auth.notActive';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthNotActivate] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthNotActivate] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
