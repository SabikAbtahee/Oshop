import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QueryDatabaseService } from '../database-service/query-database.service';
import { switchMap, first } from 'rxjs/operators';
import { Entities } from 'src/app/config/enums/default.enum';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {
  constructor(private router:Router,private securityService:SecurityService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    
      return new Observable(observer=>{
        this.securityService.isAdmin().subscribe(res=>{
          if(res){
            observer.next(res);
          }
          else{
            observer.next(false);
            this.router.navigate(['/authentication']);
          }
        })
      })
  }
  
}
