import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../model/course.interface';
import { CoursesService } from '../../service/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form = this.fb.group({
    _id: [''],
    name: [''],
    category: [''],
  });
  course!: Course;

  constructor(
    private fb: NonNullableFormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe((data: any) => {
      this.course = data.course;
    });
  }

  ngOnInit(): void {
    this.form.setValue(this.course);
  }

  onCancel() {
    this.location.back();
  }
  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: () => {
        this.onSuccess(), this.onCancel();
      },
      error: () => this.onError(),
    });
  }
  onError() {
    this._snackBar.open('Error on save course.', 'OK', {
      duration: 3000,
    });
  }
  onSuccess() {
    this._snackBar.open('Course successful saved.', 'OK', {
      duration: 3000,
    });
  }
}
