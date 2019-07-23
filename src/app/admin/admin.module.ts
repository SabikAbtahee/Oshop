import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDefaultComponent } from './components/admin-default/admin-default.component';
import { RouterModule, Routes } from '@angular/router';
import { adminRoutes } from '../config/routes/lazyloadedRoutes.routes';




@NgModule({
  declarations: [AdminDefaultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule { }
