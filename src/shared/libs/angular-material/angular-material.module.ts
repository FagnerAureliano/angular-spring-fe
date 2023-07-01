import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

const MODULES = [
  MatToolbarModule,
  MatTableModule,
  MatCardModule,
  MatProgressBarModule,
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES],
})
export class AngularMaterialModule {}
