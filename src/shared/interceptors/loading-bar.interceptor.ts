import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, Observable, throwError } from 'rxjs';

import { LoadingBarService } from '../services/loading-bar.service';

@Injectable()
export class LoadingBarInterceptor implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];

  constructor(private loadingService: LoadingBarService) {}

  removeRequest(req: HttpRequest<any>) {
    const index = this.requests.indexOf(req);
    if (index >= 0) {
      this.requests.splice(index, 1);
    }

    const isLoading = this.requests.length > 0;

    if (isLoading) {
      this.loadingService.show();
    } else {
      setTimeout(() => {
        this.loadingService.hide();
      }, 300);
    }
  }

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.requests.push(req);
    this.loadingService.show();

    return next.handle(req).pipe(
      catchError((err) => {
        return throwError(() => err);
      }),
      finalize(() => {
        this.removeRequest(req);
      })
    );
  }
}
