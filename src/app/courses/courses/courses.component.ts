import { Component, OnInit } from '@angular/core';

import { Observable, catchError, of, shareReplay } from 'rxjs';
import { Course } from '../model/course.interface';
import { CoursesService } from '../service/courses.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/shared/libs/components/dialog/dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]> = this.courseService.list().pipe(
    catchError((error) => {
      console.log(error);

      this.onError('Erro ao carregar curso.', error.status, '');

      return of([]);
    }),
    shareReplay()
  );

  displayedColumns = ['name', 'category'];

  constructor(private courseService: CoursesService, public dialog: MatDialog) { }

  ngOnInit(): void { }

  onError(body: string, status: string, style: string) {
    let data = { body, header: status, style }
    this.dialog.open(DialogComponent, {
      data: data,
    });
  }
}
