import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryDatabaseService } from './database-service/query-database.service';
import { UtilityService } from './utility-service/utility.service';
import { SecurityService } from './security-service/security.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    QueryDatabaseService,
    UtilityService,
    SecurityService
  ]

})
export class CoreModule { }
