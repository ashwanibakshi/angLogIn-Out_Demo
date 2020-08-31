import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {User} from './user';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {}
  helper = new JwtHelperService();
  header = new HttpHeaders();

     register(a:User) {
       console.log('a user',a);
    return this.http.post('http://localhost:3000/api/user/adduser',a);
  }
 login(a:User){
     return this.http.post('http://localhost:3000/api/user/login',a);
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
