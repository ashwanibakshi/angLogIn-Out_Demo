import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {DataService} from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:User;

  constructor(private dataService: DataService,private router:Router) { }

  ngOnInit() {
    this.user={
       uname:'',
       email:'',
       password:''
    }
  }
    onSubmit(a: User,isValid: boolean){
      if(isValid) {
        console.log(a);
        this.dataService.login(a).subscribe((data)=> {
           if(data['msg']=='success') {
             console.log('DATA',data);
              alert('login worked')
              this.dataService.token(data['token']);
              const temp =  localStorage.getItem('jwt');
              console.log('token',temp);
              this.router.navigate(['dashboard']);
           }
        });
      }
    }
}
