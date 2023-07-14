import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of, shareReplay } from 'rxjs';
import { DialogComponent } from 'src/shared/libs/components/dialog/dialog.component';
import { Course } from '../../model/course.interface';
import { CoursesService } from '../../service/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]> = this.courseService.list().pipe(
    catchError((error) => {
      this.onError('Erro ao carregar curso.', error.status, '');

      return of([]);
    }),
    shareReplay()
  );

  constructor(
    private courseService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  handleAdd(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onError(body: string, status: string, style: string): void {
    let data = { body, header: status, style };
    this.dialog.open(DialogComponent, {
      data: data,
    });
  }
}
