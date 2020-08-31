import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line: no-trailing-whitespace
// import { NgForm } from '@angular/forms'; 
import {User} from '../user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-regsiter',
  templateUrl: './regsiter.component.html',
  styleUrls: ['./regsiter.component.css']
})
export class RegsiterComponent implements OnInit {
  public user:User;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.user = {
     uname:'',
     email:'',
     password:''
     // tslint:disable-next-line: semicolon
     }
  }

  // tslint:disable-next-line: one-line
  // tslint:disable-next-line: typedef-whitespace
  // tslint:disable-next-line: one-line
   // tslint:disable-next-line: typedef-whitespace
   // tslint:disable-next-line: one-line
   // tslint:disable-next-line: typedef-whitespace
   // tslint:disable-next-line: one-line
   onSubmit(a: User,isValid: boolean){
     // tslint:disable-next-line: semicolon
     if(isValid) {
     console.log(a);
     this.dataService.register(a).subscribe((data)=> {
       console.log(data);
          // tslint:disable-next-line: quotemark
          // if(data.msg === "success" ) {
          //   alert('user is register');
          // }
       }
       );
     }
    }
}
