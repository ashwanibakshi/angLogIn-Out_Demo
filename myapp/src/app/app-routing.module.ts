import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegsiterComponent} from './regsiter/regsiter.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dash/dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'register',component:RegsiterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'',redirectTo:'register',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
