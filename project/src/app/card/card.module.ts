import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { DetailsComponent } from './details/details.component';
import { CardRoutingModule } from './card-routing.module';



@NgModule({
  declarations: [
    CardListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
  ],
  exports:[
    CardListComponent,
    DetailsComponent,
  ]
})
export class CardModule { }
