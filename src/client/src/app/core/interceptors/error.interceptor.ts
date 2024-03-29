import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private toastr: ToastrService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(error => {
        if(error){
          if(error.status === 400){
            if(error.error.errors){
              throw error.error;
            }
            else{
              this.toastr.error(error.error.message, error.error.statusCode);

            }
          }
          if(error.status === 401){
            this.toastr.error(error.error.message, error.error.statusCode);
          }
          if(error.status === 404){
            this.router.navigateByUrl('not-found').then(r => r);
          }
          if(error.status === 500){
            this.router.navigateByUrl('server-error').then(r => r);
          }
        }
        return throwError(error);
      })
    );
  }
}
