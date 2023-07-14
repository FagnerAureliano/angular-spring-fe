import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, first } from 'rxjs';

import { Course } from '../model/course.interface';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/courses';
  // private readonly API = '/assets/courses.json';
  constructor(private http: HttpClient) {}

  list(): Observable<Course[]> {
    return this.http.get<Course[]>(this.API).pipe(first());
  }
  save(record: Partial<Course>): Observable<Course> {
    return this.http.post<Course>(this.API, record).pipe(first());
  }
}
