import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { StaticRouterRoutingModule } from './static-routing.module';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StaticRouterRoutingModule,
  ],
  
})
export class StaticModule { }
