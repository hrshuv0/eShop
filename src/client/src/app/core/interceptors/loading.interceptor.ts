import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { delay, finalize, Observable } from 'rxjs';
import { BusyService } from "../_services/busy.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private busyService: BusyService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(!request.url.includes('emailexists') && !request.url.includes('orders')){
      this.busyService.busy();
    }
    if(request.method === 'DELETE'){
      return next.handle(request);
    }

    return next.handle(request).pipe(
      // delay(1000),
      finalize(() =>{
        this.busyService.idle();
      })
    );
  }
}
