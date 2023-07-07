import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of, shareReplay } from 'rxjs';
import { DialogComponent } from 'src/shared/libs/components/dialog/dialog.component';
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

      this.onError('Erro ao carregar curso.', error.status, '');

      return of([]);
    }),
    shareReplay()
  );

  displayedColumns = ['name', 'category', 'actions'];

  constructor(private courseService: CoursesService,
    public dialog: MatDialog, private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void { }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route })

  }

  onError(body: string, status: string, style: string) {
    let data = { body, header: status, style }
    this.dialog.open(DialogComponent, {
      data: data,
    });
  }
}
