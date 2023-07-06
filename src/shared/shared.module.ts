import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './libs/angular-material/angular-material.module';
import { DialogComponent } from './libs/components/dialog/dialog.component';
import { LoadingBarComponent } from './libs/components/loading-bar/loading-bar.component';
import { CategoryPipe } from './pipes/category.pipe';

const COMPONENTS = [LoadingBarComponent, DialogComponent, CategoryPipe];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, AngularMaterialModule],
  exports: [COMPONENTS],
})
export class SharedModule {}
