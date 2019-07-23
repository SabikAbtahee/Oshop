import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquiryDefaultComponent } from './components/enquiry-default/enquiry-default.component';
import { RouterModule, Routes } from '@angular/router';
import { enquiryRoutes } from '../config/routes/lazyloadedRoutes.routes';



@NgModule({
  declarations: [EnquiryDefaultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(enquiryRoutes)
  ]
})
export class EnquiryModule { }
