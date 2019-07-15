import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDefaultComponent } from './components/profile-default/profile-default.component';
import { RouterModule, Routes } from '@angular/router';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { SharedModule } from '../shared/shared.module';


const routes:Routes=[
  {
    path:'',
    component:ProfileDefaultComponent
  }
]
@NgModule({
  declarations: [ProfileDefaultComponent, PasswordChangeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ProfileModule { }
