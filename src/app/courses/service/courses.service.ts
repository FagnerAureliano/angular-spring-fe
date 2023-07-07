import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, first, } from 'rxjs';

import { Course } from '../model/course.interface';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  private readonly apiUrl = 'api/courses';
  // private readonly apiUrl = '/assets/courses.json';
  constructor(private http: HttpClient) {}

  list(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl)
    .pipe(
      first(),
    );
  }
}
