import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { LoadingBarRef } from 'src/shared/models/loading-bar-re.models';
import { LoadingBarService } from 'src/shared/services/loading-bar.service';

const ANIMATION_TIMINGS = '600ms cubic-bezier(0.25, 0.8, 0.25, 1)';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss'],
})
export class LoadingBarComponent {
  constructor(public loadingService: LoadingBarService) {}
}
