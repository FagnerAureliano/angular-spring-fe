import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';
import { Course } from '../model/course.interface';
import { CoursesService } from '../service/courses.service';

export const courseResolver: ResolveFn<Course> = (route, state) => {
  // const service = inject(CoursesService);

  if (route.params && route.params['id']) {
    return inject(CoursesService).findById(route.paramMap.get('id')!);
  }
  return of({ _id: '', name: '', category: '', lessons: [] });
};
