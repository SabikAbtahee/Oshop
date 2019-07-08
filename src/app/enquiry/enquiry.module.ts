import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquiryDefaultComponent } from './components/enquiry-default/enquiry-default.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {
    path:'',
    component:EnquiryDefaultComponent
  }
]
@NgModule({
  declarations: [EnquiryDefaultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EnquiryModule { }
