import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService:DataService,private router:Router) {}

  ngOnInit() {}

  logout(){
    console.log('logout')
    this.dataService.logout();
    window.location.href="register";
  }
}
