import { Component, OnInit } from '@angular/core';

import { Observable, catchError, of } from 'rxjs';
import { Course } from '../model/course.interface';
import { CoursesService } from '../service/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]> = this.courseService.list().pipe(
    catchError((error) => {
      console.log(error);

      return of([]);
    })
  );

  displayedColumns = ['name', 'category'];

  constructor(private courseService: CoursesService) {}

  ngOnInit(): void {}
}
