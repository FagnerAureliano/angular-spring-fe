import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Course } from '../model/course.interface';
import { CoursesService } from '../service/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]> = this.courseService.list();
  displayedColumns = ['name', 'category'];

  constructor(private courseService: CoursesService) {}

  ngOnInit(): void {}
}
