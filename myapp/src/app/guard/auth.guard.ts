import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,CanActivate,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router:Router,public dataService:DataService){}

  canActivate():boolean{
    if(!this.dataService.loggedIn()){
      //token Not Expired
       return true;
    }
    else{
      //token Expired
      this.router.navigate(['register']);
      return false;
    }
  }   
}
