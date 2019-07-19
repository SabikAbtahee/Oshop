import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryDefaultComponent } from './components/category-default/category-default.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {
    path:'',
    component:CategoryDefaultComponent
  }
]
@NgModule({
  declarations: [CategoryDefaultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoryModule { }
