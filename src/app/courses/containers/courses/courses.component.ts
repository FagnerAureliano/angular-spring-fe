import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
export class CoursesComponent {
  courses$: Observable<Course[]> | null = null;

  constructor(
    private service: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  refresh(): void {
    this.courses$ = this.service.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar curso.', error.status, '');
        return of([]);
      }),
      shareReplay()
    );
  }

  handleAdd(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  handleEdit(course: Course): void {
    this.router.navigate(['edit', course._id], { relativeTo: this.route });
  }
  handleExclude(course: Course): void {
    this.service.remove(course._id).subscribe(
      () => {
        this.refresh();
        this.onSuccess();
      },
      (err) => {
        this.onError('Erro ao tentar remover curso.', err.status, '');
      }
    );
  }
  onSuccess() {
    this._snackBar.open('Course successful removed.', 'OK', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
  onError(body: string, status: string, style: string): void {
    let data = { body, header: status, style };
    this.dialog.open(DialogComponent, {
      data: data,
    });
  }
}
