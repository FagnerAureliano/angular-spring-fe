import { Injectable, Injector } from '@angular/core';
import { LoadingBarRef } from '../models/loading-bar-re.models';
import { Overlay, GlobalPositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoadingBarComponent } from '../libs/components/loading-bar/loading-bar.component';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingBarService {
  private loadingSubject = new BehaviorSubject<boolean>(true);

  loading$: Observable<boolean> = this.loadingSubject.asObservable();
  hide(): void {
    this.loadingSubject.next(false);
  }
  show(): void {
    this.loadingSubject.next(true);
  }
}

