import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/shared/libs/angular-material/angular-material.module';
import { CoursesComponent } from './courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module'; 
import { SharedModule } from 'src/shared/shared.module';
import { CourseFormComponent } from './course-form/course-form.component';



@NgModule({
  declarations: [CoursesComponent, CourseFormComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    CoursesRoutingModule, SharedModule
  ]
})
export class CoursesModule { }
