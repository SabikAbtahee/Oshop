import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    FlexLayoutModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
