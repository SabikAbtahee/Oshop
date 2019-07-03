import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    FlexLayoutModule
  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
