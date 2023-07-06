import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/shared/libs/angular-material/angular-material.module';
import { CoursesComponent } from './courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module'; 
import { SharedModule } from 'src/shared/shared.module';



@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    CoursesRoutingModule, SharedModule
  ]
})
export class CoursesModule { }
