import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    CardListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardListComponent,
  ]
})
export class CardModule { }
