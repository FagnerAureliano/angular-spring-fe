import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, first, tap } from 'rxjs';

import { Course } from '../model/course.interface';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/courses';
  // private readonly API = '/assets/courses.json';
  constructor(private http: HttpClient) {}

  list(): Observable<Course[]> {
    return this.http.get<Course[]>(this.API).pipe(
      first()
      // delay(2000), // simula tempo de entrega de resposta
      // tap((res) => console.log(res))
    );
  }
  findById(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.API}/${id}`).pipe(first());
  }
  save(record: Partial<Course>): Observable<Course> {
    if (record._id) {
      return this.update(record);
    }
    return this.create(record);
  }
  private create(record: Partial<Course>): Observable<Course> {
    return this.http.post<Course>(this.API, record).pipe(first());
  }
  private update(record: Partial<Course>): Observable<Course> {
    return this.http
      .put<Course>(`${this.API}/${record._id}`, record)
      .pipe(first());
  }
}
