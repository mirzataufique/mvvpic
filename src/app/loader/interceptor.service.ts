import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(public loaderService:LoaderService) { }
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   const loaderService  = this.injector.get(LoaderService);
  //   loaderService.isLoading.next(false); 
  //  return next.handle(req).pipe(
  //    finalize(()=>{
  //      loaderService.isLoading.next(false);
  //    })
  //  )

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   this.loaderService.isLoading.next(true); 
   return next.handle(req).pipe(
     finalize(()=>{
       this.loaderService.isLoading.next(false)
     })
   )
  }
}
