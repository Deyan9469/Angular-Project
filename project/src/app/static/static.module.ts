import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { StaticRouterRoutingModule } from './static-routing.module';



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StaticRouterRoutingModule,
  ],
  
})
export class StaticModule { }
