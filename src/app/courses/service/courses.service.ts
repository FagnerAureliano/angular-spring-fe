import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, first, } from 'rxjs';

import { Course } from '../model/course.interface';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  private readonly apiUrl = '/assets/cou1rses.json';
  constructor(private http: HttpClient) {}

  list(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl)
    .pipe(
      first(),
    );
  }
}
