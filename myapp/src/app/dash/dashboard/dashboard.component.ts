import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import {Router} from '@angular/router';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
dash;
  constructor(private dataService:DataService,private router:Router) {
    this.dataService.dashboard().subscribe((data)=>{
      console.log(data['udata'])
      this.dash = data['udata'];
   });
  }

  ngOnInit() {}

  logout(){
    console.log('logout')
    this.dataService.logout();
    window.location.href="register";
  }
}
