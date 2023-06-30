import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/shared/angular-material/angular-material.module';
import { CoursesComponent } from './courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';



@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
