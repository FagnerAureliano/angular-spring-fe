import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

const MODULES = [
  MatCardModule,
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatToolbarModule,
  MatProgressBarModule,
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES],
})
export class AngularMaterialModule {}
