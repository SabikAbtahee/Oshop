import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDefaultComponent } from './components/profile-default/profile-default.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {
    path:'',
    component:ProfileDefaultComponent
  }
]
@NgModule({
  declarations: [ProfileDefaultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }
