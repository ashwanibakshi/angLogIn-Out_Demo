import { Component, OnInit } from '@angular/core'; 
import {User} from '../user';
import { DataService } from '../data.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-regsiter',
  templateUrl: './regsiter.component.html',
  styleUrls: ['./regsiter.component.css']
})
export class RegsiterComponent implements OnInit {
  public user:User;

  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit() {
    this.user = {
     uname:'',
     email:'',
     password:''
     }
  }

   onSubmit(a: User,isValid: boolean){
     if(isValid) {
     console.log(a);
     this.dataService.register(a).subscribe((data)=> {
       console.log(data);
      this.router.navigate(['login']);
       }
       );
     }
    }
}
