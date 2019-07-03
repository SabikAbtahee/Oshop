import { Component, OnInit } from '@angular/core';
import {defaultConst} from '../../config/constants/defaultConstants';
@Component({
  selector: 'app-root-default',
  templateUrl: './root-default.component.html',
  styleUrls: ['./root-default.component.css']
})
export class AppComponent implements OnInit{
  title = 'Oshop';
  toolbar;

  constructor(){
    
  }

  ngOnInit(){
    this.toolbar=defaultConst.navbar;
  }
}
