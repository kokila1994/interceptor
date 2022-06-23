import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpClient
} from '@angular/common/http';

import { catchError, filter, map, Observable, of, throwError, } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private http:HttpClient) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


  
    return next.handle(request).pipe(map((event:HttpEvent<any>)=>{
      console.log(event)
      if(event instanceof HttpResponse){
        if(event.status == 200){
          console.log(event.status)
        }
      }
      return event
    }))
  
    
  }

}

