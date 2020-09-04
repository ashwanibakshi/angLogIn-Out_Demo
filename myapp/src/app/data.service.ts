import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {User} from './user';
import {JwtHelperService} from '@auth0/angular-jwt';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {}
  helper = new JwtHelperService();
 header = new HttpHeaders({'No-Auth':'True'});

     register(a:User) {
      this.header.append('Content-Type', 'application/json');
       console.log('a user',a);
    return this.http.post('http://localhost:3000/api/user/adduser',a,{headers:this.header});
  }
 login(a:User){
  this.header.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:3000/api/user/login',a,{headers:this.header});
 }

 dashboard(){
   return this.http.get('http://localhost:3000/api/user/userData');
 }

 token(tkn: any) {
   localStorage.setItem('jwt',tkn);
 }

  loggedIn(){
    var  temp = localStorage.getItem('jwt') 
    console.log(temp);
    return this.helper.isTokenExpired(temp);
  }

  logout(){
    localStorage.clear();
  }

}
