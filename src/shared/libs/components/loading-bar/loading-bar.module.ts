import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { LoadingBarComponent } from './loading-bar.component';

@NgModule({
  declarations: [LoadingBarComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [LoadingBarComponent]
})
export class LoadingBarModule {}
