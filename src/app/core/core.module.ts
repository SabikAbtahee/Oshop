import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryDatabaseService } from './database-service/query-database.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    QueryDatabaseService
  ]

})
export class CoreModule { }
