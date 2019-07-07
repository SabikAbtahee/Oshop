import { Component, OnInit } from '@angular/core';
import {defaultConst} from '../../config/constants/defaultConstants';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root-default',
  templateUrl: './root-default.component.html',
  styleUrls: ['./root-default.component.css']
})
export class AppComponent implements OnInit{
  title = 'Oshop';
  toolbar;
  menuItems;
  home='';
  constructor(private router:Router){
    
  }

  ngOnInit(){
    this.toolbar=defaultConst.navbar;
    this.menuItems = defaultConst.menu;
  }

  route(url){
    this.router.navigateByUrl(url);
  }
  
}
