import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryDefaultComponent } from './components/category-default/category-default.component';
import { RouterModule, Routes } from '@angular/router';
import { categoryRoutes } from '../config/routes/lazyloadedRoutes.routes';



@NgModule({
  declarations: [CategoryDefaultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(categoryRoutes)
  ]
})
export class CategoryModule { }
