import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';

@Injectable()
export class AuthinterceptorInterceptor implements HttpInterceptor {

  constructor(private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.headers.get('No-Auth') == "True"){
    return next.handle(request.clone())
    }
      if(localStorage.getItem('jwt')!=null){
         request = request.clone({
           headers:request.headers.set('Authorization','Bearer '+localStorage.getItem('jwt'))
         });
         return next.handle(request);
        }
      else{
        this.router.navigate[('login')];
      }
  }
}
