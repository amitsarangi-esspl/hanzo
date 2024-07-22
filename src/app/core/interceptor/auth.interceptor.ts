import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Retrieve the token from local storage or a service
    const authToken = localStorage.getItem('token')?? 'Token';

    // Clone the request and add the authorization header
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });

    // Handle the request and response
    return next.handle(authReq).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          // Log the response or perform other actions with the response data
          console.log('Response intercepted', event);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        // Handle the error response
        console.error('Error intercepted', error);
        return throwError(error);
      })
    );
  }
}
