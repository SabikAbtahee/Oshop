import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatProgressBarModule } from '@angular/material';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
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
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    InternationalPhoneNumberModule,
    NgxIntlTelInputModule,
    AngularFontAwesomeModule,
    MatDividerModule,
    MatProgressBarModule
  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    InternationalPhoneNumberModule,
    NgxIntlTelInputModule,
    AngularFontAwesomeModule,
    MatDividerModule,
    MatProgressBarModule
  ]
})
export class SharedModule { }
