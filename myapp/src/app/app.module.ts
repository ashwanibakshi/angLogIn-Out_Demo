import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegsiterComponent } from './regsiter/regsiter.component';
import { LoginComponent } from './login/login.component';
import { DataService } from './data.service';
import { DashboardComponent } from './dash/dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegsiterComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
